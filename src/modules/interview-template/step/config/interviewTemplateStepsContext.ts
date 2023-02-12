import { createConnector } from 'commons/utils/connector/createConnector';
import { Connect } from 'commons/utils/connector/MobXConnector';
import { createTemplateStep } from '../application/use-cases/createTemplateStep';
import { deleteTemplateStep } from '../application/use-cases/deleteTemplateStep';
import { initTemplateStepsList } from '../application/use-cases/initTemplateStepsList';
import { updateTemplateStep } from '../application/use-cases/updateTemplateStep';

export type InterviewTemplateStepsContext = {
    createTemplateStep: ReturnType<typeof createTemplateStep>;
    deleteTemplateStep: ReturnType<typeof deleteTemplateStep>;
    updateTemplateStep: ReturnType<typeof updateTemplateStep>;
    initTemplateStepsList: ReturnType<typeof initTemplateStepsList>;
}

const connector = createConnector<InterviewTemplateStepsContext>();

export const Provider = connector.Provider;
export const connect: Connect<InterviewTemplateStepsContext> = connector.connect;