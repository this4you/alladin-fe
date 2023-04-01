import { Logger } from 'commons/infrastructure/logger/Logger';
import { Notificator } from 'commons/infrastructure/notificator/models/Notificator';
import { StepCategoryRepository } from '../ports/StepCategoryRepository';
import { StepCategoryView } from '../ports/StepCategoryView';

export class StepCategoryUseCase {
    constructor(
        private stepId: string,
        private stepCategoryRepository: StepCategoryRepository,
        private stepCategoryView: StepCategoryView,
        private logger: Logger,
        private notificator: Notificator
    ) {}

    async initStepCategories(): Promise<void> {
        try {
            this.stepCategoryView.setLoading(true);

            const categories = await this.stepCategoryRepository.get(this.stepId);

            this.stepCategoryView.setCategories(categories);
        } catch (e) {
            this.logger.error(e as Error);

            this.notificator.error('Cannot load step categories');
        } finally {
            this.stepCategoryView.setLoading(false);
        }
    }
}