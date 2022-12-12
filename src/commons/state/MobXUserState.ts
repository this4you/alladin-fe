import { makeAutoObservable } from 'mobx';
import { MobXBoolState } from './MobXBoolState';

export class MobXUserState {
    constructor(
        public loadingState: MobXBoolState
    ) {
        makeAutoObservable(this);
    }

    userId: string | null = null;
}
