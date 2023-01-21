import { InterviewTemplateItem } from '../../models/InterviewTemplateItem';
import { Notificator } from 'commons/utils/notificator/models/Notificator';
import { Logger } from 'commons/utils/logger/Logger';

export const initTemplatesList = (
    getTemplates: () => Promise<InterviewTemplateItem[]>,
    setTemplatesToState: (templates:InterviewTemplateItem[]) => void,
    notificator: Notificator,
    logger: Logger
) => async () => {
    try {
        const templates = await getTemplates();
        setTemplatesToState(templates);
    } catch (e: any) {
        notificator.error(e.message);
        logger.error(e);
    }
};