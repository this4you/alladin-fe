import { UserContext } from './context';
import { FactoryOptions, ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { initUserInfoUseCase } from '../application/use-cases/initUserInfoUseCase';
import { getUser } from '../repositories/userRepository';
import { commonContextFactory } from 'commons/config/commonFactory';
import { showUserContent } from '../ui/state/userState';
import { authModuleFactory } from '../../auth-module/config/authFactory';

class UserModuleFactory extends ModuleFactory<UserContext> {
    protected build(options: FactoryOptions): UserContext {
        const { restClient, logger, authState } = commonContextFactory;
        const { logOutUseCase } = authModuleFactory.get({ key: 'auth-module' });

        return {
            initUserInfoUseCase: initUserInfoUseCase(
                getUser(restClient.get),
                showUserContent,
                authState.setIsAuth,
                logger
            ),
            logOutUseCase,
            authState: authState
        }
    }
}

export const userModuleFactory = new UserModuleFactory();