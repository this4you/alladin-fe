import { RestClient } from '../utils/api-clients/rest/RestClient';
import { Notificator } from '../utils/notificator/models/Notificator';
import { Logger } from '../utils/logger/Logger';
import { createConnector } from '../utils/connector/createConnector';
import { Connect } from '../utils/connector/MobXConnector';
import { MobXNotificatorState } from '../state/MobXNotificatorState';
import { MobXAuthState } from '../state/MobXAuthState';

export type CommonContext = {
    restClient: RestClient;
    notificator: Notificator;
    notificatorState: MobXNotificatorState;
    logger: Logger;
    authState: MobXAuthState;
}

const connector = createConnector<CommonContext>();

export const Provider = connector.Provider;
export const connect: Connect<CommonContext> = connector.connect;