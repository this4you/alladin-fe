import { Logger } from 'commons/utils/logger/Logger';
import { Notificator } from 'commons/utils/notificator/models/Notificator';
import { InterviewTemplateItem } from '../../models/InterviewTemplateItem';

export const createTemplate = (
    createTemplate: (name: string) => Promise<InterviewTemplateItem>,
    addNewTemplate: (newTemplate: InterviewTemplateItem) => void,
    hideCreateTemplateInput: () => void,
    logger: Logger,
    notifier: Notificator
) => async (name: string): Promise<void> => {
    try {
        const newTemplate = await createTemplate(name);
        addNewTemplate(newTemplate);
        hideCreateTemplateInput();
    } catch (error: any) {
        logger.error(error);
        notifier.error(`Error in create template process: ${error?.message}`);
    }
}