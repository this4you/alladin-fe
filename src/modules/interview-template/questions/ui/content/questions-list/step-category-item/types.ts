import { StepCategory } from '../../../../application/models/StepCategory';
import { StepCategoryUseCase } from '../../../../application/useCases/StepCategoryUseCase';
import { QuestionUseCase } from '../../../../application/useCases/QuestionUseCase';

export type StepCategoryItemProps = {
    stepCategory: StepCategory;
    stepCategoryUseCase: StepCategoryUseCase;
    questionUseCase: QuestionUseCase;
};