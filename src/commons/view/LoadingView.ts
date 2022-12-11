import { makeAutoObservable } from 'mobx';
import { MobXBoolState } from '../state/MobXBoolState';

export class LoadingView {

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

export const getLoadingView = () => {
    const state = new MobXBoolState();
    const view = new LoadingView(state);

    return {
        state, view
    };
}