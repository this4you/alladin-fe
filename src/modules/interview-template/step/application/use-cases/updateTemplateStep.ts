import { Logger } from 'commons/infrastructure/logger/Logger';
import { Notificator } from 'commons/infrastructure/notificator/models/Notificator';
import { InterviewTemplateStep } from '../models/InterviewTemplateStep';

export const updateTemplateStep = (
    updateTemplateStep: (templateStep: InterviewTemplateStep) => Promise<void>,
    updateTemplateStepView: (templateStep: InterviewTemplateStep) => void,
    logger: Logger,
    notifier: Notificator
) => async (templateStep: InterviewTemplateStep): Promise<boolean> => {
    try {
        await updateTemplateStep(templateStep);
        updateTemplateStepView(templateStep);

        return true;
    } catch (error: any) {
        logger.error(error);
        notifier.error(`Error in update template step process: ${error?.message}`);

        return false;
    }
}