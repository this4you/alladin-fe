import { createConnector } from 'commons/utils/connector/createConnector';
import { Connect } from 'commons/utils/connector/MobXConnector';
import { createTemplateStep } from '../application/use-cases/createTemplateStep';
import { deleteTemplateStep } from '../application/use-cases/deleteTemplateStep';
import { initTemplateStepsList } from '../application/use-cases/initTemplateStepsList';

export type InterviewTemplateStepsContext = {
    createTemplateStep: ReturnType<typeof createTemplateStep>;
    deleteTemplateStep: ReturnType<typeof deleteTemplateStep>;
    initTemplateStepsList: ReturnType<typeof initTemplateStepsList>;
}

const connector = createConnector<InterviewTemplateStepsContext>();

export const Provider = connector.Provider;
export const connect: Connect<InterviewTemplateStepsContext> = connector.connect;