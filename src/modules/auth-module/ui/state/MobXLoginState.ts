import { MobXBoolState } from 'commons/state/MobXBoolState';
import { makeAutoObservable } from 'mobx';

export class MobXLoginState {
    constructor(
        public loading: MobXBoolState
    ) {
        makeAutoObservable(this)
    }

    showUserContent: boolean = false
}