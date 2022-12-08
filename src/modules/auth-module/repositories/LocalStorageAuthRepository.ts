import { AuthRepository } from '../application/ports/AuthRepository';

export class LocalStorageAuthRepository implements AuthRepository {
    saveToken(token: string): void {
        localStorage.setItem('token', token);
    }
}