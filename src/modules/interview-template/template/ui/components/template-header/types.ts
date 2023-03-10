import { deleteTemplate } from "modules/interview-template/template/application/use-cases/deleteTemplate"
import { updateTemplate } from "modules/interview-template/template/application/use-cases/updateTemplate";
import { MobXInterviewTemplateState } from '../../state/MobXInterviewTemplateState';

export type TemplateHeaderProps = {
    deleteTemplate: ReturnType<typeof deleteTemplate>;
    updateTemplate: ReturnType<typeof updateTemplate>;
    state: MobXInterviewTemplateState;
}