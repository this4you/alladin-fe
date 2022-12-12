import { Notificator } from './models/Notificator';
import { NotificationType } from './models/NotificationType';
import { MobXNotificatorState } from 'commons/state/MobXNotificatorState';

export class SnackbarNotificator implements Notificator {
    constructor(
        private state: MobXNotificatorState
    ) {}

    error(message: string): void {
        this.createNotification(message, NotificationType.ERROR)
    }

    info(message: string): void {
        this.createNotification(message, NotificationType.INFO)
    }

    success(message: string): void {
        this.createNotification(message, NotificationType.SUCCESS)
    }

    private createNotification(message: string, type: NotificationType) {
        this.state.addNotification({
            key: Number(new Date()),
            type,
            message: message
        })
    }
}