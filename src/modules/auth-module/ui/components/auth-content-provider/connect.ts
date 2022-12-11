import { AuthContentProvider as Component } from './AuthContentProvider';
import { connect } from 'modules/auth-module/config/context';

export const AuthContentProvider = connect(
    Component,
    'initUserInfoUseCase',
    'authState'
)