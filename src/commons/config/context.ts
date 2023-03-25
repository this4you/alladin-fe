import { RestClient } from '../infrastructure/api-clients/rest/RestClient';
import { Notificator } from '../infrastructure/notificator/models/Notificator';
import { Logger } from '../infrastructure/logger/Logger';
import { createConnector } from '../infrastructure/connector/createConnector';
import { Connect } from '../infrastructure/connector/MobXConnector';
import { MobXNotificatorState } from '../state/MobXNotificatorState';
import { MobXAuthState } from '../state/MobXAuthState';

export type CommonContext = {
    restClient: RestClient;
    notificator: Notificator;
    logger: Logger;
    notificatorState: MobXNotificatorState;
    authState: MobXAuthState;
}

const connector = createConnector<CommonContext>();

export const Provider = connector.Provider;
export const connect: Connect<CommonContext> = connector.connect;