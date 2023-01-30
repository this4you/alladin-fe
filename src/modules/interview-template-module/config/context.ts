import { createConnector } from 'commons/utils/connector/createConnector';
import { Connect } from 'commons/utils/connector/MobXConnector';
import { createTemplate } from '../application/use-cases/template-list/createTemplate';
import { initTemplatesList } from '../application/use-cases/template-list/initTemplatesList';
import { setActiveTemplateItem } from '../application/use-cases/template-list/setActiveTemplateItem';
import { deleteTemplate } from '../application/use-cases/template-list/deleteTemplate';
import { updateTemplate } from '../application/use-cases/template-list/updateTemplate';

export type InterviewTemplateContext = {
    createTemplate: ReturnType<typeof createTemplate>;
    deleteTemplate: ReturnType<typeof deleteTemplate>;
    updateTemplate: ReturnType<typeof updateTemplate>;
    initTemplatesList: ReturnType<typeof initTemplatesList>;
    setActiveTemplateItem: ReturnType<typeof setActiveTemplateItem>;
}

const connector = createConnector<InterviewTemplateContext>();

export const Provider = connector.Provider;
export const connect: Connect<InterviewTemplateContext> = connector.connect;