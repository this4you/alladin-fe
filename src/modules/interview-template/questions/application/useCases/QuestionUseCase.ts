import { Logger } from 'commons/infrastructure/logger/Logger';
import { Notificator } from 'commons/infrastructure/notificator/models/Notificator';
import { QuestionRepository } from '../ports/QuestionRepository';
import { StepCategoryView } from '../ports/StepCategoryView';

export class QuestionUseCase {
    constructor(
        private questionRepository: QuestionRepository,
        private stepCategoryView: StepCategoryView,
        private logger: Logger,
        private notificator: Notificator
    ) {}

    async create(stepCategoryId: string, text: string) {
        try {
            const question = await this.questionRepository.create(
                stepCategoryId,
                text
            );

            this.stepCategoryView.addQuestion(stepCategoryId, question);
        } catch (e) {
            this.logger.error(e as Error);

            this.notificator.error('Error during creating question');
        }
    }

    async delete(id: string, stepCategoryId: string): Promise<void> {
        try {
            await this.questionRepository.delete(id);
            this.stepCategoryView.removeQuestion(id, stepCategoryId);
        } catch (e) {
            this.notificator.error('Error during delete question');
            this.logger.error(e as Error);
        }
    }

    async update(id: string, text: string, stepCategoryId: string): Promise<boolean> {
        try {
            await this.questionRepository.update(id, stepCategoryId, text);

            this.stepCategoryView.updateQuestion(stepCategoryId, {
                id: id,
                text: text,
                position: 0
            });

            return true;
        } catch (e) {
            this.logger.error(e as Error);

            this.notificator.error('Error during creating question');

            return false;
        }
    }
}