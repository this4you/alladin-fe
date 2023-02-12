import { InterviewTemplateItem } from '../models/InterviewTemplateItem';
import { Notificator } from 'commons/utils/notificator/models/Notificator';
import { Logger } from 'commons/utils/logger/Logger';

export const initTemplatesList = (
    getTemplates: () => Promise<InterviewTemplateItem[]>,
    setTemplatesToState: (templates:InterviewTemplateItem[]) => void,
    setActiveTemplateItem: (activeItem: InterviewTemplateItem) => void,
    setIsProcess: () => void,
    setFinished: () => void,
    notificator: Notificator,
    logger: Logger
) => async (activeTemplateId: string | null) => {
    try {
        setIsProcess();

        const templates = await getTemplates();
        setTemplatesToState(templates);

        if (activeTemplateId) {
            const activeTemplateItem = templates.find(it => it.id === activeTemplateId);

            if (!activeTemplateItem) {
                logger.error(new Error(`No template in list with id ${activeTemplateId}`));
            }

            setActiveTemplateItem(activeTemplateItem!!);
        }

    } catch (e: any) {
        notificator.error(e.message);
        logger.error(e);
    } finally {
        setFinished();
    }
};