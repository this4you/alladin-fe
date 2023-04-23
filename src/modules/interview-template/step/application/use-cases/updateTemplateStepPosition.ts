import { Logger } from 'commons/infrastructure/logger/Logger';
import { Notificator } from 'commons/infrastructure/notificator/models/Notificator';
import { InterviewTemplateStep } from '../models/InterviewTemplateStep';

export const updateTemplateStepPosition = (
    updateTemplateStepPosition: (stepId: string, newPosition: number) => Promise<void>,
    updateTemplateStepPositionView: (stepId: string, newPosition: number) => void,
    logger: Logger,
    notifier: Notificator
) => async (stepId: string, newPosition: number): Promise<void> => {
    try {
        updateTemplateStepPositionView(stepId, newPosition);
        await updateTemplateStepPosition(stepId, newPosition);
    } catch (error: any) {
        logger.error(error);
        notifier.error(`Error in update template step position process: ${error?.message}`);
    }
}