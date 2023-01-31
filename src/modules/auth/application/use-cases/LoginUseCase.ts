import { Login } from '../models/Login';
import { Logger } from 'commons/utils/logger/Logger';
import { Notificator } from 'commons/utils/notificator/models/Notificator';
import { LoginView } from '../ports/LoginView';
import { LoginRepository } from '../ports/LoginRepository';
import { AuthRepository } from '../ports/AuthRepository';


export class LoginUseCase {
    constructor(
        private loginRepository: LoginRepository,
        private authRepository: AuthRepository,
        private loginView: LoginView,
        private notificator: Notificator,
        private logger: Logger
    ) {}

    async login(loginRequest: Login): Promise<void> {
        this.loginView.loading.showLoading();

        try {
            const loginResponse = await this.loginRepository.login(loginRequest);

            if (loginResponse.token) {
                this.authRepository.saveToken(loginResponse.token);
                this.loginView.showAuthorizedContent();
            } else {
                this.notificator.error('Something terrible happened. You should write to support.');
                this.logger.error(new Error('Token is empty'), 'Auth error')
            }
        } catch (e: any) {
            this.notificator.error('Incorrect request login data. Check your email or password');
        } finally {
            this.loginView.loading.hideLoading();
        }
    }
}