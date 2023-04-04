import { StepCategory } from '../models/StepCategory';

export interface StepCategoryView {
    getCategories(): StepCategory[];
    addCategory(stepCategory: StepCategory): void;
    removeCategory(id: string): void;
    setLoading(value: boolean): void;
    setCategories(categories: StepCategory[]): void;
}