import { UserRepository } from '../application/ports/UserRepository';
import { User } from '../application/models/User';
import { RestClient } from 'commons/utils/api-clients/rest/RestClient';

export class RestUserRepository implements UserRepository {
    constructor(
        private restClient: RestClient
    ) {}

    getUser(): Promise<User> {
        return this.restClient.get('user');
    }
}