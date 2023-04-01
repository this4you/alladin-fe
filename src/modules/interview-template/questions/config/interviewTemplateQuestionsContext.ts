import { createConnector } from 'commons/infrastructure/connector/createConnector';
import { Connect } from 'commons/infrastructure/connector/MobXConnector';
import { QuestionCategoryUseCase } from '../application/useCases/QuestionCategoryUseCase';
import { QuestionCategoryView } from '../application/ports/QuestionCategoryView';
import { MobXQuestionCategoryState } from '../ui/state/MobXQuestionCategoryState';
import { StepCategoryUseCase } from '../application/useCases/StepCategoryUseCase';
import { StepCategoryView } from '../application/ports/StepCategoryView';
import { MobXStepCategoryState } from '../ui/state/MobXStepCategoryState';

export type InterviewTemplateQuestionsContext = {
   questionCategoryUseCase: QuestionCategoryUseCase;
   questionCategoryView: QuestionCategoryView;
   questionCategoryState: MobXQuestionCategoryState;

   stepCategoryUseCase: StepCategoryUseCase;
   stepCategoryView: StepCategoryView;
   stepCategoryState: MobXStepCategoryState;
}

const connector = createConnector<InterviewTemplateQuestionsContext>();

export const Provider = connector.Provider;
export const connect: Connect<InterviewTemplateQuestionsContext> = connector.connect;