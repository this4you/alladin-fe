import { FactoryOptions, ModuleFactory } from 'commons/infrastructure/factory/moduleFactory';
import { InterviewTemplateQuestionsContext } from './interviewTemplateQuestionsContext';
import { commonContextFactory } from 'commons/config/commonFactory';
import { MobXStepCategoryState } from '../ui/state/MobXStepCategoryState';
import { RestStepCategoryRepository } from '../repositories/RestStepCategoryRepository';
import { StepCategoryUseCase } from '../application/useCases/StepCategoryUseCase';
import { MobXStepCategoryView } from '../ui/view/MobXStepCategoryView';
import { interviewTemplateQuestionCategoriesFactory } from './questionCategory/interviewTemplateQuestionsCategoryFactory';

type InterviewTemplateQuestionsFactoryOptions = {
    stepId: string
} & FactoryOptions;

class InterviewTemplateQuestionsFactory extends ModuleFactory<InterviewTemplateQuestionsContext, InterviewTemplateQuestionsFactoryOptions> {
    build({ stepId }: InterviewTemplateQuestionsFactoryOptions): InterviewTemplateQuestionsContext {
        const { restClient, logger, notificator } = commonContextFactory;

        const {
            questionCategoryState,
            questionCategoryView,
            questionCategoryUseCase
        } = interviewTemplateQuestionCategoriesFactory.get({ key: 'question-categories' })

        const stepCategoryState = new MobXStepCategoryState();
        const stepCategoryView = new MobXStepCategoryView(stepCategoryState);
        const stepCategoryRepository = new RestStepCategoryRepository(restClient);
        const stepCategoryUseCase = new StepCategoryUseCase(
                stepId,
                stepCategoryRepository,
                stepCategoryView,
                logger,
                notificator
            )
        ;

        return {
            questionCategoryState,
            questionCategoryView,
            questionCategoryUseCase,
            stepCategoryState,
            stepCategoryView,
            stepCategoryUseCase
        }
    }
}

export const interviewTemplateQuestionsFactory = new InterviewTemplateQuestionsFactory();