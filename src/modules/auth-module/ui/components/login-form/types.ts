import { LoginUseCase } from 'modules/auth-module/application/use-cases/LoginUseCase';
import { BoolState } from 'commons/view/LoadingView';

export type LoginFormProps = {
    loginUseCase: LoginUseCase,
    loginLoadingState: BoolState
}