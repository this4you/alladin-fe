import { FactoryOptions, ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { commonContextFactory } from 'commons/config/commonFactory';
import { InterviewTemplateContext } from './context';
import { createTemplate as createTemplateUseCase } from '../application/use-cases/template-list/createTemplate';
import { createTemplate } from '../repositories/interviewTemplateRepository';
import { addNewTemplate, setCreateMode } from '../ui/state/interviewTemplateState';
import { hideCreateTemplateInput } from '../application/use-cases/template-list/hideCreateTemplateInput';

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
        }
    }
}

export const interviewTemplateFactory = new InterviewTemplateFactory();