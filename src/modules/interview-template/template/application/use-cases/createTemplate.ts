import { Logger } from 'commons/infrastructure/logger/Logger';
import { Notificator } from 'commons/infrastructure/notificator/models/Notificator';
import { InterviewTemplateItem } from '../models/InterviewTemplateItem';

export const createTemplate = (
    createTemplate: (name: string) => Promise<InterviewTemplateItem>,
    addNewTemplate: (newTemplate: InterviewTemplateItem) => void,
    logger: Logger,
    notifier: Notificator
) => async (name: string): Promise<void> => {
    try {
        const newTemplate = await createTemplate(name);
        addNewTemplate(newTemplate);
    } catch (error: any) {
        logger.error(error);
        notifier.error(`Error in create template process: ${error?.message}`);
    }
}