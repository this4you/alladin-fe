export interface Notificator {
    error(message: string): void;

    success(message: string): void;

    info(message: string): void;
}