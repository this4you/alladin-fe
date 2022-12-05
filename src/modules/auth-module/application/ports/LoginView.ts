import { LoadingView } from 'commons/view/LoadingView';

export interface LoginView {
    loading: LoadingView,

    showAuthorizedContent(): void
}