import { createConnector } from 'commons/utils/connector/createConnector';
import { Connect } from 'commons/utils/connector/MobXConnector';
import { createTemplateUseCase } from '../application/use-cases/createTemplateUseCase';

export type InterviewTemplateContext = {
    createTemplateUseCase: ReturnType<typeof createTemplateUseCase>
}

const connector = createConnector<InterviewTemplateContext>();

export const Provider = connector.Provider;
export const connect: Connect<InterviewTemplateContext> = connector.connect;