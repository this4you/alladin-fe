import { InterviewTemplateItem } from '../models/InterviewTemplateItem';
import { Notificator } from 'commons/infrastructure/notificator/models/Notificator';
import { Logger } from 'commons/infrastructure/logger/Logger';
import { toSnakeCase } from 'commons/infrastructure/cases';

export const initTemplatesList = (
    getTemplates: () => Promise<InterviewTemplateItem[]>,
    setTemplatesToState: (templates:InterviewTemplateItem[]) => void,
    setActiveTemplateItem: (activeItem: InterviewTemplateItem) => void,
    setIsProcess: () => void,
    setFinished: () => void,
    notificator: Notificator,
    logger: Logger
) => async (activeTemplate: string | null) => {
    try {
        setIsProcess();

        const templates = await getTemplates();
        setTemplatesToState(templates);

        if (activeTemplate) {
            const activeTemplateItem = templates.find(it => toSnakeCase(it.name) === activeTemplate);

            if (!activeTemplateItem) {
                logger.error(new Error(`No template in list with name ${activeTemplate}`));

                return;
            }

            setActiveTemplateItem(activeTemplateItem);
        }

    } catch (e: any) {
        notificator.error(e.message);
        logger.error(e);
    } finally {
        setFinished();
    }
};