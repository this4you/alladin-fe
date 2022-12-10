import { Notificator } from './Notificator';
import { makeAutoObservable } from 'mobx';
import { BoolState } from '../../view/LoadingView';

export enum NotificationType {
    INFO = 'INFO',
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS'
}

type Notification = {
    key: number;
    type: NotificationType;
    message: string;
}

export class MobXNotificatorState {
    constructor() {
        makeAutoObservable(this)
    }

    displayedNotifications: number[] = []

    allNotifications: Notification[] = []

    addNotification(notification: Notification) {
        this.allNotifications = [...this.allNotifications, notification]
    }

    get notifications() {
        return this.allNotifications.filter(n => !this.displayedNotifications.includes(n.key));
    }

    notificationDisplayed(key: number) {
        this.displayedNotifications = [...this.displayedNotifications, key]
    }
}

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