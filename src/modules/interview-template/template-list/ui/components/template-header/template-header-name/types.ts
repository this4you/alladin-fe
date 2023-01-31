import { updateTemplate } from 'modules/interview-template/template-list/application/use-cases/updateTemplate';
import { InterviewTemplateItem } from '../../../../application/models/InterviewTemplateItem';

export type TemplateContentHeaderNameProps = {
    template: InterviewTemplateItem,
    updateTemplate: ReturnType<typeof updateTemplate>
}