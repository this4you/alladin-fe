import { Logger } from 'commons/infrastructure/logger/Logger';
import { Notificator } from 'commons/infrastructure/notificator/models/Notificator';

export const deleteTemplateStep = (
    deleteTemplateStep: (id: string) => Promise<void>,
    deleteTemplateStepFromView: (id: string) => void,
    logger: Logger,
    notifier: Notificator
) => async (id: string): Promise<void> => {
    try {
        await deleteTemplateStep(id);
        deleteTemplateStepFromView(id);
    } catch (error: any) {
        logger.error(error);
        notifier.error(`Error in delete template step process: ${error?.message}`);
    }
}