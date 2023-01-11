import { LoginUseCase } from '../application/use-cases/LoginUseCase';
import { createConnector } from 'commons/utils/connector/createConnector';
import { Connect } from 'commons/utils/connector/MobXConnector';
import { FormValidator } from 'commons/components/form/types';
import { Login } from '../application/models/Login';
import { MobXAuthState } from 'commons/state/MobXAuthState';
import { MobXLoginState } from '../ui/state/MobXLoginState';
import { logOutUseCase } from '../application/use-cases/logOutUseCase';

export type AuthContext = {
    loginUseCase: LoginUseCase,
    logOutUseCase: ReturnType<typeof logOutUseCase>,
    loginState: MobXLoginState,
    authState: MobXAuthState,
    loginFormValidator: FormValidator<Login>
}

const connector = createConnector<AuthContext>();

export const Provider = connector.Provider;
export const connect: Connect<AuthContext> = connector.connect;