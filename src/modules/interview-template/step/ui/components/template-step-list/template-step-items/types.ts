import { initTemplateStepsList } from "modules/interview-template/step/application/use-cases/initTemplateStepsList";
import { updateTemplateStepPosition } from "modules/interview-template/step/application/use-cases/updateTemplateStepPosition";

export type TemplateStepItemsProps = {
    templateId: string;
    initTemplateStepsList: ReturnType<typeof initTemplateStepsList>;
    updateTemplateStepPosition: ReturnType<typeof updateTemplateStepPosition>;
}