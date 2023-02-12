import { createTemplateStep } from "modules/interview-template/step/application/use-cases/createTemplateStep";

export type AddTemplateStepButtonProps = {
    templateId: string;
    createTemplateStep: ReturnType<typeof createTemplateStep>;
};