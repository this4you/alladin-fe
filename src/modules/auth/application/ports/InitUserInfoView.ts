import { User } from '../models/User';

export interface InitUserInfoView {
    showUserContent(user: User): void
}