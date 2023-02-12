import { initTemplateStepsList } from "modules/interview-template/step/application/use-cases/initTemplateStepsList";

export type TemplateStepItemsProps = {
    templateId: string;
    initTemplateStepsList: ReturnType<typeof initTemplateStepsList>;
}