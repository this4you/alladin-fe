import { StepCategory } from '../models/StepCategory';
import { Question } from '../models/Question';

export interface StepCategoryView {
    getCategories(): StepCategory[];
    addCategory(stepCategory: StepCategory): void;
    removeCategory(id: string): void;
    setCategories(categories: StepCategory[]): void;

    addQuestion(stepCategoryId: string, question: Question): void;
    removeQuestion(id: string, stepCategoryId: string): void;

    setLoading(value: boolean): void;
}