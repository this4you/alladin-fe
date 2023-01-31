import { FactoryOptions, ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { commonContextFactory } from 'commons/config/commonFactory';
import { InterviewTemplateContext } from './interviewTemplateContext';
import { createTemplate as createTemplateUseCase } from '../application/use-cases/createTemplate';
import { initTemplatesList } from '../application/use-cases/initTemplatesList';
import { createTemplate, deleteTemplate, getTemplates, update } from '../repositories/interviewTemplateRepository';
import { addNewTemplate, getLoadedTemplates, removeTemplate, setFinished, setIsProcess, setTemplates, updateTemplate } from '../ui/state/interviewTemplateListState';
import { clearTemplateItem, setTemplateItem } from '../ui/state/interviewTemplateState';
import { setActiveTemplateItem } from '../application/use-cases/setActiveTemplateItem';
import { deleteTemplate as deleteTemplateUseCase } from '../application/use-cases/deleteTemplate';
import { updateTemplate as updateTemplateUseCase } from '../application/use-cases/updateTemplate';

class InterviewTemplateFactory extends ModuleFactory<InterviewTemplateContext> {
    build(options: FactoryOptions): InterviewTemplateContext {
        const { restClient, logger, notificator } = commonContextFactory;

        return {
            createTemplate: createTemplateUseCase(
                createTemplate(restClient.create),
                addNewTemplate,
                logger,
                notificator
            ),
            deleteTemplate: deleteTemplateUseCase(
                deleteTemplate(restClient.delete),
                removeTemplate,
                clearTemplateItem,
                logger,
                notificator
            ),
            updateTemplate: updateTemplateUseCase(
                update(restClient.update),
                updateTemplate,
                logger,
                notificator
            ),
            initTemplatesList: initTemplatesList(
                getTemplates(restClient.get),
                setTemplates,
                setTemplateItem,
                setIsProcess,
                setFinished,
                notificator,
                logger,
            ),
            setActiveTemplateItem: setActiveTemplateItem(setTemplateItem, getLoadedTemplates)
        }
    }
}

export const interviewTemplateFactory = new InterviewTemplateFactory();