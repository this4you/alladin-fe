import { Logger } from 'commons/infrastructure/logger/Logger';
import { Notificator } from 'commons/infrastructure/notificator/models/Notificator';
import { StepCategoryRepository } from '../ports/StepCategoryRepository';
import { StepCategoryView } from '../ports/StepCategoryView';
import { QuestionCategory } from '../models/QuestionCategory';
import _ from 'lodash';
import { QuestionCategoryView } from '../ports/QuestionCategoryView';

export class StepCategoryUseCase {
    constructor(
        private stepId: string,
        private stepCategoryRepository: StepCategoryRepository,
        private stepCategoryView: StepCategoryView,
        private questionCategoryView: QuestionCategoryView,
        private logger: Logger,
        private notificator: Notificator
    ) {}

    async init(): Promise<void> {
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

    async create(category: QuestionCategory): Promise<void> {
        try {
            const stepCategoryId = await this.stepCategoryRepository.create(
                this.stepId,
                category.id
            );

            const existCategories = this.stepCategoryView.getCategories();
            const newPosition = _.maxBy(
                existCategories,
                it => it.position
            )?.position ?? 0;

            this.stepCategoryView.addCategory({
                stepCategoryId: stepCategoryId,
                categoryName: category.name,
                position: newPosition,
                questions: []
            });

            this.questionCategoryView.closeModal();
        } catch (e) {
            this.logger.error(e as Error);

            this.notificator.error('Cannot create step category');
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.stepCategoryRepository.delete(id);
            this.stepCategoryView.removeCategory(id);
        } catch (e) {
            this.notificator.error('Error during delete stepCategory');
            this.logger.error(e as Error);
        }
    }
}