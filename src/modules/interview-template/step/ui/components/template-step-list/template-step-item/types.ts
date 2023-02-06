import { deleteTemplateStep } from 'modules/interview-template/step/repositories/interviewTemplateStepRepository';
import { InterviewTemplateStep } from '../../../../application/models/InterviewTemplateStep';

export type TemplateStepsItemProps = {
    deleteTemplateStep: ReturnType<typeof deleteTemplateStep>,
    step: InterviewTemplateStep
};