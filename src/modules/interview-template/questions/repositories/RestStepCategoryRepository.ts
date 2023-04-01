import { RestClient } from 'commons/infrastructure/api-clients/rest/RestClient';
import { StepCategoryRepository } from '../application/ports/StepCategoryRepository';
import { StepCategory } from '../application/models/StepCategory';

const URL = '/step-category';

export class RestStepCategoryRepository implements StepCategoryRepository {
    constructor(
        private restClient: RestClient
    ) {}

    get(stepId: string): Promise<StepCategory[]> {
        return this.restClient.get(`${URL}/${stepId}`);
    }
}