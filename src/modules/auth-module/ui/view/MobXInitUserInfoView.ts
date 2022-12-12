import { InitUserInfoView } from 'modules/auth-module/application/ports/InitUserInfoView';
import { User } from 'modules/auth-module/application/models/User';
import { MobXUserState } from 'commons/state/MobXUserState';

export class MobXInitUserInfoView implements InitUserInfoView {
    constructor(
        private state: MobXUserState
    ) {}

    showUserContent(user: User): void {
        this.state.userId = user.id;
    }

}