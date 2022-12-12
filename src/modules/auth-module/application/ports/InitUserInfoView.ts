import { User } from '../models/User';
import { LoadingView } from '../../../../commons/view/loading/LoadingView';

export interface InitUserInfoView {
    loading: LoadingView,
    showUserContent(user: User): void
}