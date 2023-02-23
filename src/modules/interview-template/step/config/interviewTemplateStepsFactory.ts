import { ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { InterviewTemplateStepsContext } from './interviewTemplateStepsContext';
import { commonContextFactory } from 'commons/config/commonFactory';
import { createTemplateStep as createTemplateStepUseCase } from '../application/use-cases/createTemplateStep';
import { deleteTemplateStep as deleteTemplateStepUseCase } from '../application/use-cases/deleteTemplateStep';
import { initTemplateStepsList as initTemplateStepsListUseCase } from '../application/use-cases/initTemplateStepsList';
import { createTemplateStep, deleteTemplateStep, getTemplateSteps, updateTemplateStep as updateTemplateStepRest, updateTemplateStepPosition as updateTemplateStepPositionRest } from '../repositories/interviewTemplateStepRepository';
import { addTemplateStep, removeTemplateStep, setFinished, setIsProcess, setTemplateSteps, updateTemplateStep, updateTemplateStepPosition } from '../ui/state/interviewTemplateStepsState';
import { updateTemplateStep as updateTemplateStepUseCase } from '../application/use-cases/updateTemplateStep';
import { updateTemplateStepPosition as updateTemplateStepPositionUseCase } from '../application/use-cases/updateTemplateStepPosition';


class InterviewTemplateStepsFactory extends ModuleFactory<InterviewTemplateStepsContext> {
    build(): InterviewTemplateStepsContext {
        const { restClient, logger, notificator } = commonContextFactory;

        return {
            createTemplateStep: createTemplateStepUseCase(
                createTemplateStep(restClient.create),
                addTemplateStep,
                logger,
                notificator
            ),
            updateTemplateStep: updateTemplateStepUseCase(
                updateTemplateStepRest(restClient.update),
                updateTemplateStep,
                logger,
                notificator
            ),
            deleteTemplateStep: deleteTemplateStepUseCase(
                deleteTemplateStep(restClient.delete),
                removeTemplateStep,
                logger,
                notificator
            ),
            initTemplateStepsList: initTemplateStepsListUseCase(
                getTemplateSteps(restClient.get),
                setTemplateSteps,
                setIsProcess,
                setFinished,
                notificator,
                logger,
            ),
            updateTemplateStepPosition: updateTemplateStepPositionUseCase(
                updateTemplateStepPositionRest(restClient.command),
                updateTemplateStepPosition,
                logger,
                notificator
            )
        }
    }
}

export const interviewTemplateStepsFactory = new InterviewTemplateStepsFactory();