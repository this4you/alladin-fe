import { LoadingState } from 'commons/state/LoadingState';
import { InterviewTemplateStep } from '../../application/models/InterviewTemplateStep';
import { action, observable } from 'mobx';

type InterviewTemplateStepsState = {
    stepsList: Array<InterviewTemplateStep>;
    loadingState: LoadingState;
};

//state
export const interviewTemplateStepsState = observable.object<InterviewTemplateStepsState>({
    stepsList: [],
    loadingState: LoadingState.NotStarted,
});

//computed

//actions
export const setIsProcess = action(() => interviewTemplateStepsState.loadingState = LoadingState.InProcess);
export const setFinished = action(() => interviewTemplateStepsState.loadingState = LoadingState.Finished);

export const setTemplateSteps = action((templateSteps: Array<InterviewTemplateStep>) => {
    interviewTemplateStepsState.stepsList = templateSteps
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

