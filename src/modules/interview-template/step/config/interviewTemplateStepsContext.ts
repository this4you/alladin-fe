import { createConnector } from 'commons/infrastructure/connector/createConnector';
import { Connect } from 'commons/infrastructure/connector/MobXConnector';
import { createTemplateStep } from '../application/use-cases/createTemplateStep';
import { deleteTemplateStep } from '../application/use-cases/deleteTemplateStep';
import { initTemplateStepsList } from '../application/use-cases/initTemplateStepsList';
import { updateTemplateStep } from '../application/use-cases/updateTemplateStep';
import { updateTemplateStepPosition } from '../application/use-cases/updateTemplateStepPosition';
import { MobxInterviewTemplateStepsState } from '../ui/state/MobxInterviewTemplateStepsState';

export type InterviewTemplateStepsContext = {
    createTemplateStep: ReturnType<typeof createTemplateStep>;
    deleteTemplateStep: ReturnType<typeof deleteTemplateStep>;
    updateTemplateStep: ReturnType<typeof updateTemplateStep>;
    updateTemplateStepPosition: ReturnType<typeof updateTemplateStepPosition>;
    initTemplateStepsList: ReturnType<typeof initTemplateStepsList>;
    state: MobxInterviewTemplateStepsState;
}

const connector = createConnector<InterviewTemplateStepsContext>();

export const Provider = connector.Provider;
export const connect: Connect<InterviewTemplateStepsContext> = connector.connect;