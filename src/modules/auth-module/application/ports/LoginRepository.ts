import { Login } from '../models/Login';
import { LoginResponse } from '../models/LoginResponse';

export interface LoginRepository {
    login(login: Login): Promise<LoginResponse>;
}