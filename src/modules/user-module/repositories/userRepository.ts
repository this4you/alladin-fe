import { RestGetType } from 'commons/utils/api-clients/rest/RestClient';
import { User } from '../application/models/User';

export const getUser = (get: RestGetType) => async () => {
    return get<User>('user');
};