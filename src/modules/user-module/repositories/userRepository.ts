import { restGetType } from 'commons/utils/api-clients/rest/RestClient';
import { User } from '../application/models/User';

export const getUser = (get: restGetType) => async () => {
    return get<User>('user');
};