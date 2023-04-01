import { RestClient } from 'commons/infrastructure/api-clients/rest/RestClient';
import { StepCategoryRepository } from '../application/ports/StepCategoryRepository';
import { StepCategory } from '../application/models/StepCategory';
import { CreateQuestionCategoryResponse } from './models/CreateQuestionCategoryResponse';
import { CreateQuestionCategoryRequest } from './models/CreateQuestionCategoryRequest';

const URL = '/step-category';

export class RestStepCategoryRepository implements StepCategoryRepository {
    constructor(
        private restClient: RestClient
    ) {}

    get(stepId: string): Promise<StepCategory[]> {
        return this.restClient.get(`${URL}/${stepId}`);
    }

    async create(stepId: string, categoryId: string): Promise<string> {
        const response = await this.restClient.create<CreateQuestionCategoryRequest, CreateQuestionCategoryResponse>(
            URL,
            {
                stepId: stepId,
                questionCategoryId: categoryId
            }
        );

        return response.id;
    }
}