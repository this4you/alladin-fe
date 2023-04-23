import { Logger } from 'commons/infrastructure/logger/Logger';
import { Notificator } from 'commons/infrastructure/notificator/models/Notificator';
import { QuestionCategoryRepository } from '../ports/QuestionCategoryRepository';
import { QuestionCategoryView } from '../ports/QuestionCategoryView';

export class QuestionCategoryUseCase {
    constructor(
        private questionCategoryRepository: QuestionCategoryRepository,
        private questionCategoryView: QuestionCategoryView,
        private logger: Logger,
        private notificator: Notificator
    ) {}

    async initQuestionCategories(): Promise<void> {
        try {
            this.questionCategoryView.setLoading(true);

            const categories = await this.questionCategoryRepository.get();

            this.questionCategoryView.setCategories(categories);
        } catch (e) {
            this.logger.error(e as Error);

            this.notificator.error('Cannot load question categories');
        } finally {
            this.questionCategoryView.setLoading(false);
        }
    }
}