import { FactoryOptions, ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { commonContextFactory } from 'commons/config/commonFactory';
import { InterviewTemplateContext } from './context';
import { createTemplateUseCase } from '../application/use-cases/createTemplateUseCase';
import { createTemplate } from '../repositories/interviewTemplateRepository';
import { addNewTemplate } from '../ui/state/interviewTemplateState';

class InterviewTemplateFactory extends ModuleFactory<InterviewTemplateContext> {
     build(options: FactoryOptions): InterviewTemplateContext {
        const { restClient, logger, notificator, authState } = commonContextFactory;

        return {
            createTemplateUseCase: createTemplateUseCase(
                createTemplate(restClient.create),
                addNewTemplate,
                logger,
                notificator
            )
        }
    }
}

export const interviewTemplateFactory = new InterviewTemplateFactory();