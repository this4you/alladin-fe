import { LoginView } from 'modules/auth-module/application/ports/LoginView';
import { LoadingView } from 'commons/view/LoadingView';

export class MobXLoginView implements LoginView {
    constructor(
        public loading: LoadingView
    ) {}

    showAuthorizedContent(): void {
        alert("AUTH CONTENT");
    }

}
