import { makeAutoObservable } from 'mobx';

export class MobXBoolState {
    constructor() {
        makeAutoObservable(this)
    }

    public is: boolean = false
}