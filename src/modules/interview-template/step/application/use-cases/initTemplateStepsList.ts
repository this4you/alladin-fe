import { Notificator } from 'commons/infrastructure/notificator/models/Notificator';
import { Logger } from 'commons/infrastructure/logger/Logger';
import { InterviewTemplateStep } from '../models/InterviewTemplateStep';
import { toSnakeCase } from '../../../../../commons/infrastructure/cases';

export const initTemplateStepsList = (
    getTemplateSteps: (templateId: string) => Promise<InterviewTemplateStep[]>,
    setTemplateStepsToState: (templates: InterviewTemplateStep[]) => void,
    setActiveStepItem: (stepItem: InterviewTemplateStep | null) => void,
    setIsProcess: () => void,
    setFinished: () => void,
    notificator: Notificator,
    logger: Logger
) => async (templateId: string, activeStep: string | null) => {
    try {
        setIsProcess();

        const templateSteps = await getTemplateSteps(templateId);

        if (activeStep) {
            const activeStepItem = templateSteps.find(
                it => toSnakeCase(it.name) === activeStep
            );

            if (!activeStepItem) {
                logger.error(new Error(`No template step in list with name ${activeStep}`));

                return;
            }

            setActiveStepItem(activeStepItem)
        } else {
            setActiveStepItem(null);
        }

        setTemplateStepsToState(templateSteps);
    } catch (e: any) {
        notificator.error('Error in init template steps' + e.message);
        logger.error(e);
    } finally {
        setFinished();
    }
};