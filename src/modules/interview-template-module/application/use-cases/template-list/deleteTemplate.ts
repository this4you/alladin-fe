import { Logger } from 'commons/utils/logger/Logger';
import { Notificator } from 'commons/utils/notificator/models/Notificator';

export const deleteTemplate = (
    deleteTemplate: (id: string) => Promise<void>,
    deleteTemplateFromView: (id: string) => void,
    clearTemplateItem: () => void,
    logger: Logger,
    notifier: Notificator
) => async (id: string): Promise<void> => {
    try {
        await deleteTemplate(id);
        deleteTemplateFromView(id);
        clearTemplateItem();
    } catch (error: any) {
        logger.error(error);
        notifier.error(`Error in delete template process: ${error?.message}`);
    }
}