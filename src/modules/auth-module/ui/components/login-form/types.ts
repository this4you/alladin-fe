import { LoginUseCase } from 'modules/auth-module/application/use-cases/LoginUseCase';
import { FormValidator } from 'commons/components/form/types';
import { Login } from 'modules/auth-module/application/models/Login';
import { MobXBoolState } from 'commons/state/MobXBoolState';

export type LoginFormProps = {
    loginUseCase: LoginUseCase,
    loginLoadingState: MobXBoolState,
    loginFormValidator: FormValidator<Login>
}