import { UserContext } from './context';
import { FactoryOptions, ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { initUserInfoUseCase } from '../application/use-cases/initUserInfoUseCase';
import { getUser } from '../repositories/userRepository';
import { commonContextFactory } from 'commons/config/commonFactory';
import { showUserContent } from '../ui/state/userState';

class UserModuleFactory extends ModuleFactory<UserContext> {
    protected build(options: FactoryOptions): UserContext {
        const { restClient, logger } = commonContextFactory;
        return {
            initUserInfoUseCase: initUserInfoUseCase(
                getUser(restClient.get),
                showUserContent,
                logger
            )
        }
    }
}

export const userModuleFactory = new UserModuleFactory();