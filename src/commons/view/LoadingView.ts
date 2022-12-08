import { action, observable } from 'mobx';

export class LoadingView {
    constructor(
        private state: BoolState
    ) {}

    @action
    showLoading() {
        console.log("SHOW LOADING");
        this.state.is = true;
    };

    @action
    hideLoading() {
        console.log("HIDE LOADING");
        this.state.is = false;
    };
}

export class BoolState {
    @observable
    public is: boolean = false
}

export const getLoadingView = () => {
    const state = new BoolState();
    const view = new LoadingView(state);

    return {
        state, view
    };
}