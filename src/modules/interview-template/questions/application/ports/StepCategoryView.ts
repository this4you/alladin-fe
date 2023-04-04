import { StepCategory } from '../models/StepCategory';
import { Question } from '../models/Question';

export interface StepCategoryView {
    getCategories(): StepCategory[];
    addCategory(stepCategory: StepCategory): void;
    removeCategory(id: string): void;
    setCategories(categories: StepCategory[]): void;

    addQuestion(question: Question): void;
    removeQuestion(id: string): void;

    setLoading(value: boolean): void;
}