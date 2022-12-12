import { InitUserInfoView } from 'modules/auth-module/application/ports/InitUserInfoView';
import { User } from 'modules/auth-module/application/models/User';
import { MobXUserState } from 'commons/state/MobXUserState';
import { LoadingView } from 'commons/view/loading/LoadingView';

export class MobXInitUserInfoView implements InitUserInfoView {
    constructor(
        public loading: LoadingView,
        private state: MobXUserState
    ) {}

    showUserContent(user: User): void {
        this.state.userId = user.id;
    }

}