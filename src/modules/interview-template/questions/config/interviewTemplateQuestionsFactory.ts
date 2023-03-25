import { ModuleFactory } from 'commons/infrastructure/factory/moduleFactory';
import { InterviewTemplateQuestionsContext } from './interviewTemplateQuestionsContext';
import { commonContextFactory } from 'commons/config/commonFactory';
import { MobXQuestionCategoryState } from '../ui/state/MobXQuestionCategoryState';
import { MobXQuestionCategoryView } from '../ui/view/MobXQuestionCategoryView';
import { QuestionCategoryUseCase } from '../application/useCases/QuestionCategoryUseCase';
import { RestQuestionCategoryRepository } from '../repositories/RestQuestionCategoryRepository';


class InterviewTemplateQuestionsFactory extends ModuleFactory<InterviewTemplateQuestionsContext> {
    build(): InterviewTemplateQuestionsContext {
        const { restClient, logger, notificator } = commonContextFactory;

        const questionCategoryState = new MobXQuestionCategoryState();
        const questionCategoryView = new MobXQuestionCategoryView(questionCategoryState);

        const questionCategoryRepository = new RestQuestionCategoryRepository(restClient);

        const questionCategoryUseCase = new QuestionCategoryUseCase(
            questionCategoryRepository,
            questionCategoryView,
            logger,
            notificator
        );

        return {
            questionCategoryState,
            questionCategoryView,
            questionCategoryUseCase,
        }
    }
}

export const interviewTemplateQuestionsFactory = new InterviewTemplateQuestionsFactory();