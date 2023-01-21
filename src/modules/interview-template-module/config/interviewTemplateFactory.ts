import { FactoryOptions, ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { commonContextFactory } from 'commons/config/commonFactory';
import { InterviewTemplateContext } from './context';
import { createTemplate as createTemplateUseCase } from '../application/use-cases/template-list/createTemplate';
import { initTemplatesList } from '../application/use-cases/template-list/initTemplatesList';
import { createTemplate, getTemplates } from '../repositories/interviewTemplateRepository';
import { addNewTemplate, setCreateMode, setTemplates } from '../ui/state/interviewTemplateState';

class InterviewTemplateFactory extends ModuleFactory<InterviewTemplateContext> {
    build(options: FactoryOptions): InterviewTemplateContext {
        const { restClient, logger, notificator, authState } = commonContextFactory;
        const hideCreateTemplateInput = () => setCreateMode(false);

        return {
            createTemplate: createTemplateUseCase(
                createTemplate(restClient.create),
                addNewTemplate,
                hideCreateTemplateInput,
                logger,
                notificator
            ),
            showCreateTemplateInput: () => setCreateMode(true),
            hideCreateTemplateInput,
            initTemplatesList: initTemplatesList(
                getTemplates(restClient.get),
                setTemplates,
                notificator,
                logger,
            ),
        }
    }
}

export const interviewTemplateFactory = new InterviewTemplateFactory();