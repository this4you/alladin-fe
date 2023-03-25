import { FactoryOptions, ModuleFactory } from 'commons/infrastructure/factory/moduleFactory';
import { commonContextFactory } from 'commons/config/commonFactory';
import { InterviewTemplateContext } from './interviewTemplateContext';
import { createTemplate as createTemplateUseCase } from '../application/use-cases/createTemplate';
import { initTemplatesList } from '../application/use-cases/initTemplatesList';
import { createTemplate, deleteTemplate, getTemplates, update } from '../repositories/interviewTemplateRepository';
import { setActiveTemplateItem } from '../application/use-cases/setActiveTemplateItem';
import { deleteTemplate as deleteTemplateUseCase } from '../application/use-cases/deleteTemplate';
import { updateTemplate as updateTemplateUseCase } from '../application/use-cases/updateTemplate';
import { MobXInterviewTemplateState } from '../ui/state/MobXInterviewTemplateState';

class InterviewTemplateFactory extends ModuleFactory<InterviewTemplateContext> {
    build(options: FactoryOptions): InterviewTemplateContext {
        const { restClient, logger, notificator } = commonContextFactory;
        const state = new MobXInterviewTemplateState();

        return {
            createTemplate: createTemplateUseCase(
                createTemplate(restClient.create),
                state.addNewTemplate.bind(state),
                logger,
                notificator
            ),
            deleteTemplate: deleteTemplateUseCase(
                deleteTemplate(restClient.delete),
                state.removeTemplate.bind(state),
                state.clearTemplateItem.bind(state),
                logger,
                notificator
            ),
            updateTemplate: updateTemplateUseCase(
                update(restClient.update),
                state.updateTemplate.bind(state),
                logger,
                notificator
            ),
            initTemplatesList: initTemplatesList(
                getTemplates(restClient.get),
                state.setTemplates.bind(state),
                state.setTemplateItem.bind(state),
                state.setIsProcess.bind(state),
                state.setFinished.bind(state),
                notificator,
                logger,
            ),
            setActiveTemplateItem: setActiveTemplateItem(
                state.setTemplateItem.bind(state),
                state.getLoadedTemplates.bind(state)
            ),
            state: state
        }
    }
}

export const interviewTemplateFactory = new InterviewTemplateFactory();