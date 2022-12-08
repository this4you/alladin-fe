import { LoginRepository } from '../application/ports/LoginRepository';
import { Login } from '../application/models/Login';
import { LoginResult } from '../application/models/LoginResult';
import { HttpMethod, RestClient } from 'commons/utils/api-clients/rest/RestClient';

export class RestLoginRepository implements LoginRepository {
    constructor(
        private restClient: RestClient
    ) {
    }

    login(login: Login): Promise<LoginResult> {
        return new Promise((res) => setTimeout(() => res({token: 'empty'}), 3000));
        // return this.restClient.command<Login, LoginResult>({
        //     url: 'user/auth',
        //     method: HttpMethod.POST
        // })
    }
}