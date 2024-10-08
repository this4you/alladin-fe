import { deleteTemplateStep } from 'modules/interview-template/step/application/use-cases/deleteTemplateStep';
import { updateTemplateStep } from 'modules/interview-template/step/application/use-cases/updateTemplateStep';
import { InterviewTemplateStep } from '../../../../application/models/InterviewTemplateStep';
import { MobxInterviewTemplateStepsState } from '../../../state/MobxInterviewTemplateStepsState';

export type TemplateStepsItemProps = {
    deleteTemplateStep: ReturnType<typeof deleteTemplateStep>;
    updateTemplateStep: ReturnType<typeof updateTemplateStep>;
    step: InterviewTemplateStep;
    state: MobxInterviewTemplateStepsState
};