import { AxiosRestClient } from '../infrastructure/api-clients/rest/AxiosRestClient';
import { FactoryOptions, ModuleFactory } from '../infrastructure/factory/moduleFactory';
import { FakeLogger } from '../infrastructure/logger/FakeLogger';
import { SnackbarNotificator } from '../infrastructure/notificator/SnackbarNotificator';
import { CommonContext } from './context';
import { MobXNotificatorState } from '../state/MobXNotificatorState';
import { MobXAuthState } from '../state/MobXAuthState';

class CommonContextFactory extends ModuleFactory<CommonContext> {
    protected build(options: FactoryOptions): CommonContext {

        const notificatorState = new MobXNotificatorState();
        const authState = new MobXAuthState();

        const notificator = new SnackbarNotificator(notificatorState);
        const restClient = new AxiosRestClient(authState);

        return {
            restClient,
            logger: new FakeLogger(),
            notificator,
            notificatorState,
            authState
        };
    }

}

export const commonContextFactory = new CommonContextFactory().get({ key: 'common' });