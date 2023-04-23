import { RestClient } from 'commons/infrastructure/api-clients/rest/RestClient';
import { QuestionRepository } from '../application/ports/QuestionRepository';
import { Question } from '../application/models/Question';
import { CreateQuestionRequest } from './models/CreateQuestionRequest';

const URL = '/question';

export class RestQuestionRepository implements QuestionRepository {
    constructor(
        private restClient: RestClient
    ) {}

    async create(stepCategoryId: string, text: string): Promise<Question> {
        return await this.restClient.create<CreateQuestionRequest, Question>(
            URL,
            {
                stepCategoryId: stepCategoryId,
                text: text,
            }
        );
    }

    async delete(id: string): Promise<void> {
        return await this.restClient.delete(`${URL}/${id}`);
    }

    async update(id: string, stepCategoryId: string, text: string): Promise<void> {
        return await this.restClient.update<CreateQuestionRequest, any>(`${URL}/${id}`, {
            text: text,
            stepCategoryId: stepCategoryId
        });
    }

}