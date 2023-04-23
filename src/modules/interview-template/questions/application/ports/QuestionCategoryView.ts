import { QuestionCategory } from '../models/QuestionCategory';

export interface QuestionCategoryView {
    setLoading(value: boolean): void;
    setCategories(categories: QuestionCategory[]): void;
    closeModal(): void;
}