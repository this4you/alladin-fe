import { FactoryOptions, ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { AuthContext } from './context';
import { LoginUseCase } from '../application/use-cases/LoginUseCase';
import { RestLoginRepository } from '../repositories/RestLoginRepository';
import { commonContextFactory } from 'commons/config/commonFactory';
import { LocalStorageAuthRepository } from '../repositories/LocalStorageAuthRepository';
import { getLoadingView } from 'commons/view/LoadingView';
import { MobXLoginView } from '../ui/view/MobXLoginView';

class AuthModuleFactory extends ModuleFactory<AuthContext> {
    protected build(options: FactoryOptions): AuthContext {
        const { restClient, logger, notificator } = commonContextFactory;

        const loginRepository = new RestLoginRepository(restClient);
        const authRepository = new LocalStorageAuthRepository();
        const loginLoadingView = getLoadingView();
        const loginView = new MobXLoginView(loginLoadingView.view);

        const loginUseCase = new LoginUseCase(
            loginRepository,
            authRepository,
            loginView,
            notificator,
            logger
        );

        return {
            loginUseCase: loginUseCase,
            loginLoadingState: loginLoadingView.state
        };
    }
}

export const authModuleFactory = new AuthModuleFactory();