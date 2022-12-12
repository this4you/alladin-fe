import { AxiosRestClient } from '../utils/api-clients/rest/AxiosRestClient';
import { FactoryOptions, ModuleFactory } from '../utils/factory/moduleFactory';
import { FakeLogger } from '../utils/logger/FakeLogger';
import { SnackbarNotificator } from '../utils/notificator/SnackbarNotificator';
import { CommonContext } from './context';
import { MobXNotificatorState } from '../state/MobXNotificatorState';
import { MobXAuthState } from '../state/MobXAuthState';
import { MobXUserState } from 'commons/state/MobXUserState';
import { getLoadingView } from 'commons/view/loading/getLoadingView';

class CommonContextFactory extends ModuleFactory<CommonContext> {
    protected build(options: FactoryOptions): CommonContext {

        const userLoading = getLoadingView();

        const notificatorState = new MobXNotificatorState();
        const authState = new MobXAuthState();
        const userState = new MobXUserState(userLoading.state);

        const notificator = new SnackbarNotificator(notificatorState);
        const restClient = new AxiosRestClient(authState);

        return {
            restClient,
            logger: new FakeLogger(),
            notificator,
            notificatorState,
            authState,
            userState,
            userLoadingView: userLoading.view
        };
    }

}

export const commonContextFactory = new CommonContextFactory().get({ key: 'common' });