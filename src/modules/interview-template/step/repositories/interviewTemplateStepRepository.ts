import { HttpMethod, RestCommandType, RestCreateType, RestDeleteType, RestGetType, RestUpdateType } from 'commons/infrastructure/api-clients/rest/RestClient';
import { CreateInterviewTemplateStep } from './models/CreateInterviewTemplateStep';
import { InterviewTemplateStep } from '../application/models/InterviewTemplateStep';

const URL = 'step';

export const createTemplateStep = (create: RestCreateType) => async (name: string, templateId: string) =>
    create<CreateInterviewTemplateStep, InterviewTemplateStep>(URL, { name, interviewTemplateId: templateId });

export const deleteTemplateStep = (restDelete: RestDeleteType) => async (id: string) =>
    restDelete(`${URL}/${id}`);

export const updateTemplateStep = (restUpdate: RestUpdateType) => async (templateStep: InterviewTemplateStep) =>
    restUpdate<InterviewTemplateStep, void>(`${URL}/${templateStep.id}`, templateStep);

export const updateTemplateStepPosition = (restCommand: RestCommandType) => async (stepId: string, newPosition: number) =>
    restCommand<{ position: number }, void>({ url: `${URL}/${stepId}`, method: HttpMethod.PATCH }, {
        position: newPosition
    });

export const getTemplateSteps = (get: RestGetType) => async (templateId: string) =>
    get<InterviewTemplateStep[]>(URL, { interviewTemplate: templateId });