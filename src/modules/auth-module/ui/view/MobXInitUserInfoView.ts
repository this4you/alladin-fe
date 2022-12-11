import { InitUserInfoView } from 'modules/auth-module/application/ports/InitUserInfoView';
import { User } from 'modules/auth-module/application/models/User';
import { MobXAuthState } from 'commons/state/MobXAuthState';

export class MobXInitUserInfoView implements InitUserInfoView {
    constructor(
       private state: MobXAuthState
    ) {}

    showLoginPage(): void {
        this.state.setToken(null);
        this.state.userId = null;

    }

    showUserContent(user: User): void {
        this.state.userId = user.id;
    }
}