import { Notificator } from './Notificator';

export class FakeNotificator implements Notificator {
    debug(message: string): void {
    }

    error(message: string): void {
    }

    info(message: string): void {
    }

    success(message: string): void {
    }

}