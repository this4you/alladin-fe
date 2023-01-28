import { RestCreateType, RestDeleteType, RestGetType, RestUpdateType } from 'commons/utils/api-clients/rest/RestClient';
import { CreateInterviewTemplate } from './models/CreateInterviewTemplate';
import { InterviewTemplateItem } from '../application/models/InterviewTemplateItem';

const URL = 'interview-template';

export const createTemplate = (create: RestCreateType) => async (name: string) =>
    create<CreateInterviewTemplate, InterviewTemplateItem>(URL, { name });

export const deleteTemplate = (restDelete: RestDeleteType) => async (id: string) =>
    restDelete(`${URL}/${id}`);

export const update = (restUpdate: RestUpdateType) => async (template: InterviewTemplateItem) =>
    restUpdate<InterviewTemplateItem, void>(`${URL}/${template.id}`, template);

export const getTemplates = (get: RestGetType) => async () =>
    get<InterviewTemplateItem[]>(URL);