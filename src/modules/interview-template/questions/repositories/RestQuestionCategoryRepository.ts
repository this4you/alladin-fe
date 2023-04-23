import { QuestionCategoryRepository } from '../application/ports/QuestionCategoryRepository';
import { QuestionCategory } from '../application/models/QuestionCategory';
import { RestClient } from 'commons/infrastructure/api-clients/rest/RestClient';

const URL = '/question-category';

export class RestQuestionCategoryRepository implements QuestionCategoryRepository {
    constructor(
        private restClient: RestClient
    ) {}

    get(): Promise<QuestionCategory[]> {
        return this.restClient.get(URL);
    }
}