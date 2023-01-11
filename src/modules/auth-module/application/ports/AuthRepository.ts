export interface AuthRepository {
    saveToken(token: string): void
    clearToken(): void
}