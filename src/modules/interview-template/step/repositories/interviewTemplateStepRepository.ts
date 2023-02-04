import { RestCreateType, RestDeleteType, RestGetType, RestUpdateType } from 'commons/utils/api-clients/rest/RestClient';
import { CreateInterviewTemplateStep } from './models/CreateInterviewTemplateStep';
import { InterviewTemplateStep } from '../application/models/InterviewTemplateStep';

const URL = 'step';

export const createTemplateStep = (create: RestCreateType) => async (name: string, templateId: string) =>
    create<CreateInterviewTemplateStep, InterviewTemplateStep>(URL, { name, interviewTemplateId: templateId });

export const deleteTemplateStep = (restDelete: RestDeleteType) => async (id: string) =>
    restDelete(`${URL}/${id}`);

// export const update = (restUpdate: RestUpdateType) => async (template: InterviewTemplateItem) =>
//     restUpdate<InterviewTemplateItem, void>(`${URL}/${template.id}`, template);

export const getTemplateSteps = (get: RestGetType) => async (templateId: string) =>
    get<InterviewTemplateStep[]>(URL, { interviewTemplate: templateId });