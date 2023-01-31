import { LoginForm as Component } from './LoginForm';
import { connect } from 'modules/auth/config/context';

export const LoginForm = connect(
    Component,
    'loginUseCase',
    'loginState',
    'loginFormValidator'
);
