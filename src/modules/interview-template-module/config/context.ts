import { createConnector } from 'commons/utils/connector/createConnector';
import { Connect } from 'commons/utils/connector/MobXConnector';
import { createTemplate } from '../application/use-cases/template-list/createTemplate';
import { showCreateTemplateInput } from '../application/use-cases/template-list/showCreateTemplateInput';
import { hideCreateTemplateInput } from '../application/use-cases/template-list/hideCreateTemplateInput';
import { initTemplatesList } from '../application/use-cases/template-list/initTemplatesList';

export type InterviewTemplateContext = {
    createTemplate: ReturnType<typeof createTemplate>;
    showCreateTemplateInput: ReturnType<typeof showCreateTemplateInput>;
    hideCreateTemplateInput: ReturnType<typeof hideCreateTemplateInput>;
    initTemplatesList: ReturnType<typeof initTemplatesList>;
}

const connector = createConnector<InterviewTemplateContext>();

export const Provider = connector.Provider;
export const connect: Connect<InterviewTemplateContext> = connector.connect;