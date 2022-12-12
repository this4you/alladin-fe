import { makeAutoObservable } from 'mobx';

export class MobXAuthState {
    constructor() {
        makeAutoObservable(this)
    }

    private _token: string | null = localStorage.getItem('token');

    get token() {
        return this._token;
    }

    setToken(value: string | null) {
        localStorage.setItem('token', value || '');
        this._token = value;
    }
}
