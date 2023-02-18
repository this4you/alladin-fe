import { FactoryOptions, ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { InterviewTemplateStepsContext } from './interviewTemplateStepsContext';
import { commonContextFactory } from 'commons/config/commonFactory';
import { createTemplateStep as createTemplateStepUseCase} from '../application/use-cases/createTemplateStep';
import { deleteTemplateStep as deleteTemplateStepUseCase} from '../application/use-cases/deleteTemplateStep';
import { initTemplateStepsList as initTemplateStepsListUseCase} from '../application/use-cases/initTemplateStepsList';
import { createTemplateStep, deleteTemplateStep, getTemplateSteps, updateTemplateStep as updateTemplateStepRest } from '../repositories/interviewTemplateStepRepository';
import { addTemplateStep, removeTemplateStep, setFinished, setIsProcess, setTemplateSteps, updateTemplateStep, updateTemplateStepPosition } from '../ui/state/interviewTemplateStepsState';
import { updateTemplateStep as updateTemplateStepUseCase } from '../application/use-cases/updateTemplateStep';
import { updateTemplateStepPosition as updateTemplateStepPositionUseCase } from '../application/use-cases/updateTemplateStepPosition';

interface InterviewTemplateStepsFactoryOptions extends FactoryOptions {
    templateId: string
}

class InterviewTemplateStepsFactory extends ModuleFactory<InterviewTemplateStepsContext, InterviewTemplateStepsFactoryOptions> {
    build({ key, templateId }: InterviewTemplateStepsFactoryOptions): InterviewTemplateStepsContext {
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
                (stepId: string, newPosition: number) => Promise.resolve(),
                updateTemplateStepPosition,
                logger,
                notificator
            )
        }
    }
}

export const interviewTemplateStepsFactory = new InterviewTemplateStepsFactory();