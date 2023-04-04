import { StepCategory } from '../models/StepCategory';

export interface StepCategoryRepository {
    get(stepId: string): Promise<StepCategory[]>;
    create(stepId: string, categoryId: string): Promise<string>
    delete(id: string): Promise<void>
}