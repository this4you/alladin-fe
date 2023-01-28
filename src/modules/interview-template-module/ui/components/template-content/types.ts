import { deleteTemplate } from '../../../application/use-cases/template-list/deleteTemplate';

export type TemplateContentProps = {
    deleteTemplate: ReturnType<typeof deleteTemplate>
}