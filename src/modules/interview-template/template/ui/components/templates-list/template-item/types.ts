import { setActiveTemplateItem } from 'modules/interview-template/template/application/use-cases/setActiveTemplateItem';
import { InterviewTemplateItem } from '../../../../application/models/InterviewTemplateItem';
import { MobXInterviewTemplateState } from '../../../state/MobXInterviewTemplateState';

export type TemplateItemProps = {
    interviewTemplateItem: InterviewTemplateItem;
    setActiveTemplateItem: ReturnType<typeof setActiveTemplateItem>;
    state: MobXInterviewTemplateState;
};