import { StepCategory } from '../../../../application/models/StepCategory';
import { StepCategoryUseCase } from '../../../../application/useCases/StepCategoryUseCase';

export type StepCategoryItemProps = {
    stepCategory: StepCategory;
    stepCategoryUseCase: StepCategoryUseCase;
};