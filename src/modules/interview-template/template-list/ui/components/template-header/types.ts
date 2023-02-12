import { deleteTemplate } from "modules/interview-template/template-list/application/use-cases/deleteTemplate"
import { updateTemplate } from "modules/interview-template/template-list/application/use-cases/updateTemplate";

export type TemplateHeaderProps = {
    deleteTemplate: ReturnType<typeof deleteTemplate>;
    updateTemplate: ReturnType<typeof updateTemplate>;
}