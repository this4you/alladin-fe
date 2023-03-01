import { ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { InterviewTemplateStepsContext } from './interviewTemplateStepsContext';
import { commonContextFactory } from 'commons/config/commonFactory';
import { createTemplateStep as createTemplateStepUseCase } from '../application/use-cases/createTemplateStep';
import { deleteTemplateStep as deleteTemplateStepUseCase } from '../application/use-cases/deleteTemplateStep';
import { initTemplateStepsList as initTemplateStepsListUseCase } from '../application/use-cases/initTemplateStepsList';
import { createTemplateStep, deleteTemplateStep, getTemplateSteps, updateTemplateStep as updateTemplateStepRest, updateTemplateStepPosition as updateTemplateStepPositionRest } from '../repositories/interviewTemplateStepRepository';
import { updateTemplateStep as updateTemplateStepUseCase } from '../application/use-cases/updateTemplateStep';
import { updateTemplateStepPosition as updateTemplateStepPositionUseCase } from '../application/use-cases/updateTemplateStepPosition';
import { MobxInterviewTemplateStepsState } from '../ui/state/MobxInterviewTemplateStepsState';


class InterviewTemplateStepsFactory extends ModuleFactory<InterviewTemplateStepsContext> {
    build(): InterviewTemplateStepsContext {
        const { restClient, logger, notificator } = commonContextFactory;
        const state = new MobxInterviewTemplateStepsState();
        return {
            state,
            createTemplateStep: createTemplateStepUseCase(
                createTemplateStep(restClient.create),
                state.addTemplateStep.bind(state),
                logger,
                notificator
            ),
            updateTemplateStep: updateTemplateStepUseCase(
                updateTemplateStepRest(restClient.update),
                state.updateTemplateStep.bind(state),
                logger,
                notificator
            ),
            deleteTemplateStep: deleteTemplateStepUseCase(
                deleteTemplateStep(restClient.delete),
                state.removeTemplateStep.bind(state),
                logger,
                notificator
            ),
            initTemplateStepsList: initTemplateStepsListUseCase(
                getTemplateSteps(restClient.get),
                state.setTemplateSteps.bind(state),
                state.setActiveStep.bind(state),
                state.setIsProcess.bind(state),
                state.setFinished.bind(state),
                notificator,
                logger,
            ),
            updateTemplateStepPosition: updateTemplateStepPositionUseCase(
                updateTemplateStepPositionRest(restClient.command),
                state.updateTemplateStepPosition.bind(state),
                logger,
                notificator
            )
        }
    }
}

export const interviewTemplateStepsFactory = new InterviewTemplateStepsFactory();