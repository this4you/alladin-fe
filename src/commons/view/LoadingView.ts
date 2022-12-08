import { makeAutoObservable } from 'mobx';

export class LoadingView {

    constructor(
        private state: BoolState
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

export class BoolState {
    constructor() {
        makeAutoObservable(this)
    }

    public is: boolean = false
}

export const getLoadingView = () => {
    const state = new BoolState();
    const view = new LoadingView(state);

    return {
        state, view
    };
}