import { LoginUseCase } from 'modules/auth/application/use-cases/LoginUseCase';
import { FormValidator } from 'commons/components/form/types';
import { Login } from 'modules/auth/application/models/Login';
import { MobXLoginState } from 'modules/auth/ui/state/MobXLoginState';

export type LoginFormProps = {
    loginUseCase: LoginUseCase,
    loginState: MobXLoginState,
    loginFormValidator: FormValidator<Login>
}