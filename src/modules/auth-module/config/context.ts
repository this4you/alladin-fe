import { LoginUseCase } from '../application/use-cases/LoginUseCase';
import { BoolState } from 'commons/view/LoadingView';
import { createConnector } from 'commons/utils/connector/createConnector';
import { Connect } from 'commons/utils/connector/MobXConnector';

export type AuthContext = {
    loginUseCase: LoginUseCase,
    loginLoadingState: BoolState
}

const connector = createConnector<AuthContext>();

export const Provider = connector.Provider;
export const connect: Connect<AuthContext> = connector.connect;