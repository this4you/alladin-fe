import { Login } from '../models/Login';
import { Logger } from 'commons/utils/logger/Logger';
import { Notificator } from 'commons/utils/notificator/Notificator';
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
            } else {
                this.notificator.error('Incorrect request login data. Check your email or password');
            }
        } catch (e: any) {
            this.notificator.error('Something terrible happened. You should write to support.');
            this.logger.error(e, 'Auth error')
        } finally {
            this.loginView.loading.hideLoading();
        }
    }
}