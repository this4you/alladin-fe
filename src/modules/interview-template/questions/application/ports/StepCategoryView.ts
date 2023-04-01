import { StepCategory } from '../models/StepCategory';

export interface StepCategoryView {
    setLoading(value: boolean): void;
    setCategories(categories: StepCategory[]): void;
}