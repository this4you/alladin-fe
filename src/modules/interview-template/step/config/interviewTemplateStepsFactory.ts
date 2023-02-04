import { FactoryOptions, ModuleFactory } from 'commons/utils/factory/moduleFactory';
import { InterviewTemplateStepsContext } from './interviewTemplateStepsContext';
import { commonContextFactory } from 'commons/config/commonFactory';
import { createTemplateStep as createTemplateStepUseCase} from '../application/use-cases/createTemplateStep';
import { deleteTemplateStep as deleteTemplateStepUseCase} from '../application/use-cases/deleteTemplateStep';
import { initTemplateStepsList as initTemplateStepsListUseCase} from '../application/use-cases/initTemplateStepsList';
import { createTemplateStep, deleteTemplateStep, getTemplateSteps } from '../repositories/interviewTemplateStepRepository';
import { addTemplateStep, removeTemplateStep, setFinished, setIsProcess, setTemplateSteps } from '../ui/state/interviewTemplateStepsState';

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
            )
        }
    }
}

export const interviewTemplateStepsFactory = new InterviewTemplateStepsFactory();