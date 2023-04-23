import { MobXStepCategoryState } from '../../state/MobXStepCategoryState';
import { StepCategoryUseCase } from '../../../application/useCases/StepCategoryUseCase';
import { MobXQuestionCategoryView } from '../../view/MobXQuestionCategoryView';

export type QuestionsListProps = {
    stepCategoryUseCase: StepCategoryUseCase;
    stepCategoryState: MobXStepCategoryState;
    questionCategoryView: MobXQuestionCategoryView;
};