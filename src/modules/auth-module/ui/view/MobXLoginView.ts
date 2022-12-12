import { LoginView } from 'modules/auth-module/application/ports/LoginView';
import { MobXLoadingView } from 'commons/view/loading/MobXLoadingView';
import { makeAutoObservable } from 'mobx';
import { MobXLoginState } from '../state/MobXLoginState';

export class MobXLoginView implements LoginView {
    constructor(
        public loading: MobXLoadingView,
        private state: MobXLoginState
    ) {
        makeAutoObservable(this)
    }

    showAuthorizedContent(): void {
        this.state.showUserContent = true;
    }

}
