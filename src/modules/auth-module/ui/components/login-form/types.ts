import { LoginUseCase } from 'modules/auth-module/application/use-cases/LoginUseCase';
import { FormValidator } from 'commons/components/form/types';
import { Login } from 'modules/auth-module/application/models/Login';
import { MobXLoginState } from 'modules/auth-module/ui/state/MobXLoginState';

export type LoginFormProps = {
    loginUseCase: LoginUseCase,
    loginState: MobXLoginState,
    loginFormValidator: FormValidator<Login>
}