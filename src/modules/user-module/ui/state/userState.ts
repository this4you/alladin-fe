import { action, observable } from 'mobx';
import { User } from 'modules/user-module/application/models/User';

export const state = observable.object<{ userInfo: null | User }>({
    userInfo: null
});

export const showUserContent = action((user: User) => {
    state.userInfo = user;
});