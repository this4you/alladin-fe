import { makeAutoObservable } from 'mobx';
import { Notification } from '../utils/notificator/models/Notification';

export class MobXNotificatorState {
    constructor() {
        makeAutoObservable(this)
    }

    private displayedNotifications: number[] = []

    private allNotifications: Notification[] = []

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