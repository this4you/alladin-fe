import { makeAutoObservable } from 'mobx';

export class MobXUserState {
    constructor() {
        makeAutoObservable(this);
    }

    userId: string | null = null;
}
