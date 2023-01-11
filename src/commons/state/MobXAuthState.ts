import { action, makeAutoObservable, observable } from 'mobx';

export class MobXAuthState {
    constructor() {
        makeAutoObservable(this)
    }

    @observable
    private _token: string | null = localStorage.getItem('token');

    @observable
    isAuth = false

    get token() {
        return this._token;
    }

    @action
    setIsAuth(value: boolean) {
        this.isAuth = value;
    }

    setToken(value: string | null) {
        localStorage.setItem('token', value || '');
        this._token = value;
    }
}
