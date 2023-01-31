import { Notificator } from 'commons/utils/notificator/models/Notificator';
import { Logger } from 'commons/utils/logger/Logger';
import { InterviewTemplateStep } from '../models/InterviewTemplateStep';

export const initTemplateStepsList = (
    templateId: string,
    getTemplateSteps: (templateId: string) => Promise<InterviewTemplateStep[]>,
    setTemplateStepsToState: (templates: InterviewTemplateStep[]) => void,
    setIsProcess: () => void,
    setFinished: () => void,
    notificator: Notificator,
    logger: Logger
) => async () => {
    try {
        setIsProcess();

        const templateSteps = await getTemplateSteps(templateId);
        setTemplateStepsToState(templateSteps);

    } catch (e: any) {
        notificator.error('Error in init template-list steps' + e.message);
        logger.error(e);
    } finally {
        setFinished();
    }
};