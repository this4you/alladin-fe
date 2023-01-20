export type CreateTemplateInputProps = {
    createTemplate: (name: string) => Promise<void>;
    hideCreateTemplateInput: () => void;
}