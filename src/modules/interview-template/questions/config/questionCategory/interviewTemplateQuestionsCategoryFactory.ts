import { ModuleFactory } from 'commons/infrastructure/factory/moduleFactory';
import { InterviewTemplateQuestionsCategoryContext } from './interviewTemplateQuestionsCategoryContext';
import { commonContextFactory } from 'commons/config/commonFactory';
import { MobXQuestionCategoryState } from '../../ui/state/MobXQuestionCategoryState';
import { MobXQuestionCategoryView } from '../../ui/view/MobXQuestionCategoryView';
import { RestQuestionCategoryRepository } from '../../repositories/RestQuestionCategoryRepository';
import { QuestionCategoryUseCase } from '../../application/useCases/QuestionCategoryUseCase';


class InterviewTemplateQuestionsCategoryFactory extends ModuleFactory<InterviewTemplateQuestionsCategoryContext> {
    build(): InterviewTemplateQuestionsCategoryContext {
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
            questionCategoryUseCase
        }
    }
}

export const interviewTemplateQuestionCategoriesFactory = new InterviewTemplateQuestionsCategoryFactory();