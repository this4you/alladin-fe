import { SnackbarNotificatorProvider as Component } from './SnackbarNotificatorProvider';
import { connect } from 'commons/config/context';

export const SnackbarNotificatorProvider = connect(
    Component,
    'notificatorState'
);