import { AxiosRestClient } from '../utils/api-clients/rest/AxiosRestClient';
import { FactoryOptions, ModuleFactory } from '../utils/factory/moduleFactory';
import { FakeLogger } from '../utils/logger/FakeLogger';
import { MobXNotificatorState, SnackbarNotificator } from '../utils/notificator/SnackbarNotificator';
import { CommonContext } from './context';

class CommonContextFactory extends ModuleFactory<CommonContext> {
    protected build(options: FactoryOptions): CommonContext {
        const notificatorState = new MobXNotificatorState();
        const notificator = new SnackbarNotificator(notificatorState);
        return {
            restClient: new AxiosRestClient(),
            logger: new FakeLogger(),
            notificator,
            notificatorState
        };
    }

}

export const commonContextFactory = new CommonContextFactory().get({ key: 'common' });