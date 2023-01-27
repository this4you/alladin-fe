import { RestCreateType, RestDeleteType, RestGetType } from 'commons/utils/api-clients/rest/RestClient';
import { CreateInterviewTemplate } from './models/CreateInterviewTemplate';
import { InterviewTemplateItem } from '../application/models/InterviewTemplateItem';

const URL = 'interview-template';

export const createTemplate = (create: RestCreateType) => async (name: string) => {
    return create<CreateInterviewTemplate, InterviewTemplateItem>(URL, { name });
}

export const deleteTemplate = (restDelete: RestDeleteType) => async (id: string) => {
    return restDelete(`${URL}/${id}`);
}

export const getTemplates = (get: RestGetType) => async () => {
    return get<InterviewTemplateItem[]>(URL);
}