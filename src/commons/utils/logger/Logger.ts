export interface Logger {
    error(error: Error): void

    error(error: Error, info: any): void

    info(message: string): void
}