import { setActiveTemplateItem } from 'modules/interview-template/template-list/application/use-cases/setActiveTemplateItem';
import { InterviewTemplateItem } from '../../../../application/models/InterviewTemplateItem';

export type TemplateItemProps = {
    interviewTemplateItem: InterviewTemplateItem;
    setActiveTemplateItem: ReturnType<typeof setActiveTemplateItem>;
};