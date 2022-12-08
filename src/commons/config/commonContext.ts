import { RestClient } from '../utils/api-clients/rest/RestClient';
import { AxiosRestClient } from '../utils/api-clients/rest/AxiosRestClient';
import { FactoryOptions, ModuleFactory } from '../utils/factory/moduleFactory';

type CommonContext = {
    restClient: RestClient
}

class CommonContextFactory extends ModuleFactory<CommonContext> {
    protected build(options: FactoryOptions): CommonContext {
        return {
            restClient: new AxiosRestClient()
        };
    }

}

export const commonContextFactory = new CommonContextFactory();