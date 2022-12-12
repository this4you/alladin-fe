import { makeAutoObservable } from 'mobx';
import { MobXBoolState } from '../../state/MobXBoolState';

export class MobXLoadingView {

    constructor(
        private state: MobXBoolState
    ) {
        makeAutoObservable(this)
    }


    showLoading() {
        this.state.is = true;
    };


    hideLoading() {
        this.state.is = false;
    };
}