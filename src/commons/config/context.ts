import { RestClient } from '../utils/api-clients/rest/RestClient';
import { Notificator } from '../utils/notificator/Notificator';
import { MobXNotificatorState } from '../utils/notificator/SnackbarNotificator';
import { Logger } from '../utils/logger/Logger';
import { createConnector } from '../utils/connector/createConnector';
import { Connect } from '../utils/connector/MobXConnector';

export type CommonContext = {
    restClient: RestClient;
    notificator: Notificator;
    notificatorState: MobXNotificatorState;
    logger: Logger;
}

const connector = createConnector<CommonContext>();

export const Provider = connector.Provider;
export const connect: Connect<CommonContext> = connector.connect;