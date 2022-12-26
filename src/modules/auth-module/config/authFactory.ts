import { FactoryOptions, ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { AuthContext } from './context';
import { LoginUseCase } from '../application/use-cases/LoginUseCase';
import { RestLoginRepository } from '../repositories/RestLoginRepository';
import { commonContextFactory } from 'commons/config/commonFactory';
import { LocalStorageMobXAuthRepository } from '../repositories/LocalStorageMobXAuthRepository';
import { MobXLoginView } from '../ui/view/MobXLoginView';
import { LoginFormValidator } from '../ui/validators/LoginFormValidator';
import { RestUserRepository } from '../repositories/RestUserRepository';
import { getLoadingView } from 'commons/view/loading/getLoadingView';
import { MobXLoginState } from '../ui/state/MobXLoginState';

class AuthModuleFactory extends ModuleFactory<AuthContext> {
    protected build(options: FactoryOptions): AuthContext {
        const { restClient, logger, notificator, authState } = commonContextFactory;

        const loginRepository = new RestLoginRepository(restClient);
        const authRepository = new LocalStorageMobXAuthRepository(authState);
        const userRepository = new RestUserRepository(restClient);

        const loginLoading = getLoadingView();
        const loginState = new MobXLoginState(loginLoading.state);

        const loginView = new MobXLoginView(loginLoading.view, loginState);

        const loginUseCase = new LoginUseCase(
            loginRepository,
            authRepository,
            loginView,
            notificator,
            logger
        );

        const loginFormValidator = new LoginFormValidator();

        return {
            loginUseCase,
            authState,
            loginFormValidator,
            loginState
        };
    }
}

export const authModuleFactory = new AuthModuleFactory();