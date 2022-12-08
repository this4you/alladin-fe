import { LoginForm as Component } from './LoginForm';
import { connect } from 'modules/auth-module/config/context';

export const LoginForm = connect(
    Component,
    'loginUseCase',
    'loginLoadingState'
);
