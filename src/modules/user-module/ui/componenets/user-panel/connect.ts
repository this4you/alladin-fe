import { connect } from 'modules/user-module/config/context';
import { UserPanel as Component } from './UserPanel';

export const UserPanel = connect(
    Component,
    'logOutUseCase'
);