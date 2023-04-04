import { Question } from '../models/Question';

export interface QuestionRepository {
    create(stepCategoryId: string, text: string): Promise<Question>;
    delete(id: string): Promise<void>;
}