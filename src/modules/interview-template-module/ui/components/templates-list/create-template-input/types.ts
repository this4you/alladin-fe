export type CreateTemplateInputProps = {
    createTemplateUseCase: (name: string) => Promise<void>;
    onCancelClick: () => void;
}