import { CreateTemplateInputButton, CreateTemplateButtonsContainer, CreateTemplateInputContainer, TemplateNameField } from './styles';
import { CreateTemplateInputProps } from './types';
import { useCallback, useMemo, useState } from 'react';

export const CreateTemplateInput: React.FC<CreateTemplateInputProps> = ({ onCancelClick, createTemplateUseCase }) => {
    const [name, setName] = useState('');

    const onChangeNameInput = useCallback((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setName(event.target.value);
    }, []);

    const onCreateClick = useCallback(async () => {
        await createTemplateUseCase(name);

        onCancelClick();
    }, [name]);

    const saveButtonDisabled = useMemo(() => name.length === 0, [name])

    return (
        <CreateTemplateInputContainer>
            <TemplateNameField
                id="template-name"
                placeholder={'What is template name?'}
                variant="outlined"
                value={name}
                onChange={onChangeNameInput}
            />
            <CreateTemplateButtonsContainer>
                <CreateTemplateInputButton variant="contained" onClick={onCreateClick} disabled={saveButtonDisabled}>
                    Create
                </CreateTemplateInputButton>
                <CreateTemplateInputButton variant="text" onClick={onCancelClick}>
                    Cancel
                </CreateTemplateInputButton>
            </CreateTemplateButtonsContainer>
        </CreateTemplateInputContainer>
    )
}