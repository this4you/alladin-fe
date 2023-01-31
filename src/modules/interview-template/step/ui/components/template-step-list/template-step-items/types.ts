import { initTemplateStepsList } from "modules/interview-template/step/application/use-cases/initTemplateStepsList";

export type TemplateStepItemsProps = {
    initTemplateStepsList: ReturnType<typeof initTemplateStepsList>;
}