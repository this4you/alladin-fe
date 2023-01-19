import { RestCreateType } from 'commons/utils/api-clients/rest/RestClient';
import { CreateInterviewTemplate } from './models/CreateInterviewTemplate';
import { InterviewTemplateItem } from '../application/models/InterviewTemplateItem';

const URL = 'interview-template';

export const createTemplate = (create: RestCreateType) => async (name: string) => {
    return create<CreateInterviewTemplate, InterviewTemplateItem>(URL, { name });
}