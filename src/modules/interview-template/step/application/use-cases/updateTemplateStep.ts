import { Logger } from 'commons/utils/logger/Logger';
import { Notificator } from 'commons/utils/notificator/models/Notificator';
import { InterviewTemplateStep } from '../models/InterviewTemplateStep';

export const updateTemplateStep = (
    updateTemplateStep: (templateStep: InterviewTemplateStep) => Promise<void>,
    updateTemplateStepView: (templateStep: InterviewTemplateStep) => void,
    logger: Logger,
    notifier: Notificator
) => async (templateStep: InterviewTemplateStep): Promise<void> => {
    try {
        await updateTemplateStep(templateStep);
        updateTemplateStepView(templateStep);
    } catch (error: any) {
        logger.error(error);
        notifier.error(`Error in update template step process: ${error?.message}`);
    }
}