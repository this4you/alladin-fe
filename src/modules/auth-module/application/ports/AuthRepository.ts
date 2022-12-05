export interface AuthRepository {
    saveToken(token: string): void
}