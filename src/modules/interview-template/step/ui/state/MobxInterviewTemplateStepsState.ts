import { makeAutoObservable } from 'mobx';
import { InterviewTemplateStep } from '../../application/models/InterviewTemplateStep';
import { LoadingState } from '../../../../../commons/state/LoadingState';

export class MobxInterviewTemplateStepsState {
    constructor() {
        makeAutoObservable(this);
    }

    setIsProcess() {
        this.loadingState = LoadingState.InProcess
    }

    setFinished() {
        this.loadingState = LoadingState.Finished
    }

    private stepsList: Array<InterviewTemplateStep> = []

    activeStep: InterviewTemplateStep | null = null

    loadingState: LoadingState = LoadingState.NotStarted

    get stepListView() {
       return this.stepsList.slice().sort((a, b) => a.position - b.position);
    }

    setTemplateSteps(templateSteps: Array<InterviewTemplateStep>) {
        this.activeStep = null;
        this.stepsList = templateSteps;
    }

    addTemplateStep(templateStep: InterviewTemplateStep) {
        this.stepsList = [
            ...this.stepsList,
            templateStep
        ]
    }

    removeTemplateStep(id: string) {
        this.stepsList = [
            ...this.stepsList.filter(it => it.id !== id)
        ];
    }

    updateTemplateStep(templateStepItem: InterviewTemplateStep) {
        this.stepsList = this.stepsList.map((it) =>
            it.id === templateStepItem.id ? templateStepItem : it
        );
    }

    updateTemplateStepPosition(stepId: string, newPosition: number) {
        const currentPosition = this.stepsList.find(it => it.id === stepId)?.position!!;

        this.stepsList = this.stepsList.map((it) => {

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
    }

    setActiveStep(item: InterviewTemplateStep) {
        this.activeStep = item;
    }
}