import { User } from '../models/User';

export interface UserRepository {
    getUser(): Promise<User>
}