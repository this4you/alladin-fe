import { MobXStepCategoryState } from '../../state/MobXStepCategoryState';
import { StepCategoryUseCase } from '../../../application/useCases/StepCategoryUseCase';

export type QuestionsListProps = {
    stepCategoryUseCase: StepCategoryUseCase;
    stepCategoryState: MobXStepCategoryState;
};