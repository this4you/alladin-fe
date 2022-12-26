import { User } from 'modules/auth-module/application/models/User';
import { Logger } from 'commons/utils/logger/Logger';

export const initUserInfoUseCase = (
    getUser: () => Promise<User>,
    showUserContent: (user: User) => void,
    logger: Logger
) => async () => {
    try {
        const user = await getUser();
        showUserContent(user);
    } catch (e: any) {
        logger.error(e, 'Auth error');
    }
};