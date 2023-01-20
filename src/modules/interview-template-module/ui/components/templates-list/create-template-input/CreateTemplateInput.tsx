import { CreateTemplateInputButton, CreateTemplateButtonsContainer, CreateTemplateInputContainer, TemplateNameField } from './styles';
import { CreateTemplateInputProps } from './types';
import { useCallback, useMemo, useState } from 'react';

export const CreateTemplateInput: React.FC<CreateTemplateInputProps> = ({ createTemplate, hideCreateTemplateInput }) => {
    const [name, setName] = useState('');

    const onChangeNameInput = useCallback((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setName(event.target.value);
    }, []);

    const onCreateClick = useCallback(async () => {
        await createTemplate(name);
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
                <CreateTemplateInputButton variant="text" onClick={hideCreateTemplateInput}>
                    Cancel
                </CreateTemplateInputButton>
            </CreateTemplateButtonsContainer>
        </CreateTemplateInputContainer>
    )
}