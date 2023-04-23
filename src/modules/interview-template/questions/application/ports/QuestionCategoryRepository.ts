import { QuestionCategory } from '../models/QuestionCategory';

export interface QuestionCategoryRepository {
    get(): Promise<QuestionCategory[]>;
}