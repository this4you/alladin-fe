import { Login } from '../models/Login';
import { LoginResult } from '../models/LoginResult';

export interface LoginRepository {
    login(login: Login): Promise<LoginResult>;
}