import { LoadingView } from 'commons/view/loading/LoadingView';

export interface LoginView {
    loading: LoadingView,

    showAuthorizedContent(): void
}