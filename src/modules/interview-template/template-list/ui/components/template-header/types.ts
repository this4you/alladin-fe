import { deleteTemplate } from "modules/interview-template/template-list/application/use-cases/deleteTemplate"

export type TemplateHeaderProps = {
    deleteTemplate: ReturnType<typeof deleteTemplate>
}