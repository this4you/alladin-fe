import { FactoryOptions, ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { commonContextFactory } from 'commons/config/commonFactory';
import { InterviewTemplateContext } from './context';
import { createTemplate as createTemplateUseCase } from '../application/use-cases/template-list/createTemplate';
import { initTemplatesList } from '../application/use-cases/template-list/initTemplatesList';
import { createTemplate, deleteTemplate, getTemplates } from '../repositories/interviewTemplateRepository';
import { addNewTemplate, getLoadedTemplates, removeTemplate, setCreateMode, setFinished, setIsProcess, setTemplates } from '../ui/state/interviewTemplateListState';
import { clearTemplateItem, setTemplateItem } from '../ui/state/interviewTemplateState';
import { setActiveTemplateItem } from '../application/use-cases/template-list/setActiveTemplateItem';
import { deleteTemplate as deleteTemplateUseCase } from '../application/use-cases/template-list/deleteTemplate';

class InterviewTemplateFactory extends ModuleFactory<InterviewTemplateContext> {
    build(options: FactoryOptions): InterviewTemplateContext {
        const { restClient, logger, notificator } = commonContextFactory;
        const hideCreateTemplateInput = () => setCreateMode(false);

        return {
            createTemplate: createTemplateUseCase(
                createTemplate(restClient.create),
                addNewTemplate,
                hideCreateTemplateInput,
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
            showCreateTemplateInput: () => setCreateMode(true),
            hideCreateTemplateInput,
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