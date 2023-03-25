import { User } from 'modules/auth/application/models/User';
import { Logger } from 'commons/infrastructure/logger/Logger';

export const initUserInfoUseCase = (
    getUser: () => Promise<User>,
    showUserContent: (user: User) => void,
    setIsAuth: (value: boolean) => void,
    logger: Logger
) => async () => {
    try {
        const user = await getUser();
        showUserContent(user);
        setIsAuth(true);
    } catch (e: any) {
        logger.error(e, 'Auth error');
        setIsAuth(false);
    }
};