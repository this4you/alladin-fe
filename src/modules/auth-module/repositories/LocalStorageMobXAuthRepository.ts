import { AuthRepository } from '../application/ports/AuthRepository';
import { MobXAuthState } from 'commons/state/MobXAuthState';

export class LocalStorageMobXAuthRepository implements AuthRepository {
    constructor(
        private authState: MobXAuthState
    ) {}

    saveToken(token: string): void {
        this.authState.setToken(token);
    }
}