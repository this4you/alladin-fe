import { LoginUseCase } from '../application/use-cases/LoginUseCase';
import { createConnector } from 'commons/utils/connector/createConnector';
import { Connect } from 'commons/utils/connector/MobXConnector';
import { FormValidator } from 'commons/components/form/types';
import { Login } from '../application/models/Login';
import { MobXBoolState } from 'commons/state/MobXBoolState';
import { InitUserInfoUseCase } from '../application/use-cases/InitUserInfoUseCase';
import { MobXAuthState } from 'commons/state/MobXAuthState';

export type AuthContext = {
    loginUseCase: LoginUseCase,
    initUserInfoUseCase: InitUserInfoUseCase,
    loginLoadingState: MobXBoolState,
    authState: MobXAuthState,
    loginFormValidator: FormValidator<Login>
}

const connector = createConnector<AuthContext>();

export const Provider = connector.Provider;
export const connect: Connect<AuthContext> = connector.connect;