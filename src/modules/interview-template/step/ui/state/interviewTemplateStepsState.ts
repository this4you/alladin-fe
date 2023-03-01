import { LoadingState } from 'commons/state/LoadingState';
import { InterviewTemplateStep } from '../../application/models/InterviewTemplateStep';
import { action, computed, observable,  } from 'mobx';

type InterviewTemplateStepsState = {
    stepsList: Array<InterviewTemplateStep>;
    activeStep: InterviewTemplateStep | null
    loadingState: LoadingState;
};

//state
export const interviewTemplateStepsState = observable.object<InterviewTemplateStepsState>({
    stepsList: [],
    activeStep: null,
    loadingState: LoadingState.NotStarted,
});

//computed

export const stepsList = computed(() => {
    return interviewTemplateStepsState.stepsList.slice().sort((a, b) => a.position - b.position);
})

//actions
export const resetState = action(() => {
    interviewTemplateStepsState.loadingState = LoadingState.NotStarted;
    interviewTemplateStepsState.stepsList = [];
});

export const setIsProcess = action(() => interviewTemplateStepsState.loadingState = LoadingState.InProcess);
export const setFinished = action(() => interviewTemplateStepsState.loadingState = LoadingState.Finished);

export const setTemplateSteps = action((templateSteps: Array<InterviewTemplateStep>) => {
    interviewTemplateStepsState.activeStep = null;
    interviewTemplateStepsState.stepsList = templateSteps;
})

export const addTemplateStep = action((templateStep: InterviewTemplateStep) => {
    interviewTemplateStepsState.stepsList = [
        ...interviewTemplateStepsState.stepsList,
        templateStep
    ]
});

export const removeTemplateStep = action((id: string) => {
    interviewTemplateStepsState.stepsList = [
        ...interviewTemplateStepsState.stepsList.filter(it => it.id !== id)
    ];
});

export const updateTemplateStep = action((templateStepItem: InterviewTemplateStep) => {
    interviewTemplateStepsState.stepsList = interviewTemplateStepsState.stepsList.map((it) =>
        it.id === templateStepItem.id ? templateStepItem : it
    );
});

//TODO move logic to the presenter
export const updateTemplateStepPosition = action((stepId: string, newPosition: number) => {
    const currentPosition = interviewTemplateStepsState.stepsList.find(it => it.id === stepId)?.position!!;

    interviewTemplateStepsState.stepsList = interviewTemplateStepsState.stepsList.map((it) => {

        if (it.id === stepId) {
            return { ...it, position: newPosition }
        }

        if (newPosition > currentPosition) {
            if (it.position > currentPosition && it.position <= newPosition) {
                it.position--;
            }
        }

        if (newPosition < currentPosition) {
            if (it.position < currentPosition && it.position >= newPosition) {
                it.position++;
            }
        }
        return it;
    });
});

export const setActiveStep = action((item: InterviewTemplateStep) => {
    console.log("ACTIVE STEP", item);
    interviewTemplateStepsState.activeStep = item;
});

