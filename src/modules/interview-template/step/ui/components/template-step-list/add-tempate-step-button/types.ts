import { createTemplateStep } from "modules/interview-template/step/application/use-cases/createTemplateStep";

export type AddTemplateStepButtonProps = {
    createTemplateStep: ReturnType<typeof createTemplateStep>;
};