import { LoginUseCase } from '../application/use-cases/LoginUseCase';
import { BoolState } from 'commons/view/LoadingView';
import { createConnector } from 'commons/utils/connector/createConnector';
import { Connect } from 'commons/utils/connector/MobXConnector';
import { FormValidator } from 'commons/components/form/types';
import { Login } from '../application/models/Login';

export type AuthContext = {
    loginUseCase: LoginUseCase,
    loginLoadingState: BoolState
    loginFormValidator: FormValidator<Login>
}

const connector = createConnector<AuthContext>();

export const Provider = connector.Provider;
export const connect: Connect<AuthContext> = connector.connect;