import { Logger } from 'commons/utils/logger/Logger';
import { Notificator } from 'commons/utils/notificator/models/Notificator';
import { InterviewTemplateItem } from '../models/InterviewTemplateItem';

export const updateTemplate = (
    updateTemplate: (templateItem: InterviewTemplateItem) => Promise<void>,
    updateTemplateView: (templateItem: InterviewTemplateItem) => void,
    logger: Logger,
    notifier: Notificator
) => async (templateItem: InterviewTemplateItem): Promise<boolean> => {
    try {
        await updateTemplate(templateItem);
        updateTemplateView(templateItem);

        return true;
    } catch (error: any) {
        logger.error(error);
        notifier.error(`Error in update template process: ${error?.message}`);

        return false;
    }
}