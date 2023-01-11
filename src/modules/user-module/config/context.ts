import { initUserInfoUseCase } from '../application/use-cases/initUserInfoUseCase';
import { createConnector } from 'commons/utils/connector/createConnector';
import { Connect } from 'commons/utils/connector/MobXConnector';
import { MobXAuthState } from 'commons/state/MobXAuthState';

export type UserContext = {
    initUserInfoUseCase: ReturnType<typeof initUserInfoUseCase>,
    logOutUseCase: () => void,
    authState: MobXAuthState
}

const connector = createConnector<UserContext>();

export const Provider = connector.Provider;
export const connect: Connect<UserContext> = connector.connect;