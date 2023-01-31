import { Logger } from 'commons/utils/logger/Logger';
import { Notificator } from 'commons/utils/notificator/models/Notificator';
import { InterviewTemplateStep } from '../models/InterviewTemplateStep';

export const createTemplateStep = (
    createTemplateStep: (name: string) => Promise<InterviewTemplateStep>,
    addNewTemplateStep: (newTemplateStep: InterviewTemplateStep) => void,
    logger: Logger,
    notifier: Notificator
) => async (name: string): Promise<void> => {
    try {
        const newTemplateStep = await createTemplateStep(name);
        addNewTemplateStep(newTemplateStep);
    } catch (error: any) {
        logger.error(error);
        notifier.error(`Error in create template step process: ${error?.message}`);
    }
}