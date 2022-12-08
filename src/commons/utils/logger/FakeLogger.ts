import { Logger } from './Logger';

export class FakeLogger implements Logger {
    error(error: Error): void;
    error(error: Error, info: any): void;
    error(error: Error, info?: any): void {}

    info(message: string): void {}

}