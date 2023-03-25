import { createConnector } from 'commons/infrastructure/connector/createConnector';
import { Connect } from 'commons/infrastructure/connector/MobXConnector';
import { createTemplate } from '../application/use-cases/createTemplate';
import { initTemplatesList } from '../application/use-cases/initTemplatesList';
import { setActiveTemplateItem } from '../application/use-cases/setActiveTemplateItem';
import { deleteTemplate } from '../application/use-cases/deleteTemplate';
import { updateTemplate } from '../application/use-cases/updateTemplate';
import { MobXInterviewTemplateState } from '../ui/state/MobXInterviewTemplateState';

export type InterviewTemplateContext = {
    createTemplate: ReturnType<typeof createTemplate>;
    deleteTemplate: ReturnType<typeof deleteTemplate>;
    updateTemplate: ReturnType<typeof updateTemplate>;
    initTemplatesList: ReturnType<typeof initTemplatesList>;
    setActiveTemplateItem: ReturnType<typeof setActiveTemplateItem>;
    state: MobXInterviewTemplateState;
}

const connector = createConnector<InterviewTemplateContext>();

export const Provider = connector.Provider;
export const connect: Connect<InterviewTemplateContext> = connector.connect;