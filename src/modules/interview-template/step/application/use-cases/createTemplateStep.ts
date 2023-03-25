import { Logger } from 'commons/infrastructure/logger/Logger';
import { Notificator } from 'commons/infrastructure/notificator/models/Notificator';
import { InterviewTemplateStep } from '../models/InterviewTemplateStep';

export const createTemplateStep = (
    createTemplateStep: (name: string, templateId: string) => Promise<InterviewTemplateStep>,
    addNewTemplateStep: (newTemplateStep: InterviewTemplateStep) => void,
    logger: Logger,
    notifier: Notificator
) => async (templateId: string, stepName: string): Promise<void> => {
    try {
        const newTemplateStep = await createTemplateStep(stepName, templateId);
        addNewTemplateStep(newTemplateStep);
    } catch (error: any) {
        logger.error(error);
        notifier.error(`Error in create template step process: ${error?.message}`);
    }
}