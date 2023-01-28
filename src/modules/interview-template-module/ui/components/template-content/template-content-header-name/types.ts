import { updateTemplate } from 'modules/interview-template-module/application/use-cases/template-list/updateTemplate';
import { InterviewTemplateItem } from '../../../../application/models/InterviewTemplateItem';

export type TemplateContentHeaderNameProps = {
    template: InterviewTemplateItem,
    updateTemplate: ReturnType<typeof updateTemplate>
}