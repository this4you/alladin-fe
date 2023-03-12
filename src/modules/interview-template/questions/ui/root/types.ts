import { InterviewTemplateStep } from '../../../step/application/models/InterviewTemplateStep';

export type QuestionModuleInputContext = {
    step:  InterviewTemplateStep,
    template: string,
    clearActiveStep: () => void
};