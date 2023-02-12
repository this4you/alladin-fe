import { FactoryOptions, ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { AuthContext } from './context';
import { LoginUseCase } from '../application/use-cases/LoginUseCase';
import { RestLoginRepository } from '../repositories/RestLoginRepository';
import { commonContextFactory } from 'commons/config/commonFactory';
import { LocalStorageMobXAuthRepository } from '../repositories/LocalStorageMobXAuthRepository';
import { MobXLoginView } from '../ui/view/MobXLoginView';
import { LoginFormValidator } from '../ui/validators/LoginFormValidator';
import { getLoadingView } from 'commons/view/loading/getLoadingView';
import { MobXLoginState } from '../ui/state/MobXLoginState';
import { logOutUseCase } from '../application/use-cases/logOutUseCase';

class AuthModuleFactory extends ModuleFactory<AuthContext> {
    protected build(options: FactoryOptions): AuthContext {
        const { restClient, logger, notificator, authState } = commonContextFactory;

        const loginRepository = new RestLoginRepository(restClient);
        const authRepository = new LocalStorageMobXAuthRepository(authState);

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
            logOutUseCase: logOutUseCase(
                authRepository.clearToken.bind(authRepository),
                authState.setIsAuth
            ),
            authState,
            loginFormValidator,
            loginState
        };
    }
}

export const authModuleFactory = new AuthModuleFactory();