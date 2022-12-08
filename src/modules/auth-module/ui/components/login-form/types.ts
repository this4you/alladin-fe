import { LoginUseCase } from 'modules/auth-module/application/use-cases/LoginUseCase';
import { BoolState } from 'commons/view/LoadingView';
import { FormValidator } from '../../../../../commons/components/form/types';
import { Login } from '../../../application/models/Login';

export type LoginFormProps = {
    loginUseCase: LoginUseCase,
    loginLoadingState: BoolState,
    loginFormValidator: FormValidator<Login>
}