import { Logger } from 'commons/utils/logger/Logger';
import { UserRepository } from '../ports/UserRepository';
import { InitUserInfoView } from '../ports/InitUserInfoView';

export class InitUserInfoUseCase {
    constructor(
        private userRepository: UserRepository,
        private initUserInfoView: InitUserInfoView,
        private logger: Logger
    ) {
    }

    async init() {
        this.initUserInfoView.loading.showLoading();

        try {
            const user = await this.userRepository.getUser();
            this.initUserInfoView.showUserContent(user);
        } catch (e: any) {
            this.logger.error(e, 'Auth error');
        } finally {
            this.initUserInfoView.loading.hideLoading();
        }
    }
}