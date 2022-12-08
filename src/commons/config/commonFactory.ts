import { RestClient } from '../utils/api-clients/rest/RestClient';
import { AxiosRestClient } from '../utils/api-clients/rest/AxiosRestClient';
import { FactoryOptions, ModuleFactory } from '../utils/factory/moduleFactory';
import { Logger } from '../utils/logger/Logger';
import { FakeLogger } from '../utils/logger/FakeLogger';
import { FakeNotificator } from '../utils/notificator/FakeNotificator';
import { Notificator } from '../utils/notificator/Notificator';

type CommonContext = {
    restClient: RestClient,
    notificator: Notificator,
    logger: Logger
}

class CommonContextFactory extends ModuleFactory<CommonContext> {
    protected build(options: FactoryOptions): CommonContext {
        return {
            restClient: new AxiosRestClient(),
            logger: new FakeLogger(),
            notificator: new FakeNotificator()
        };
    }

}

export const commonContextFactory = new CommonContextFactory().get({ key: 'common' });