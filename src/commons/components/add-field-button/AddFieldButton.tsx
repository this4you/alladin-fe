import { AddMenuButtonProps } from './types';
import { useCallback, useMemo, useState } from 'react';
import { AddButton, AddNameButtonContainer, ButtonsContainer, InputContainer, NameButton, NameField } from './styles';
import { IoMdAddCircleOutline } from 'react-icons/io';

export const AddFieldButton: React.FC<AddMenuButtonProps> = ({ label, inputPlaceholder, onCreate, ...rest }) => {
    const [isCreateMode, setIsCreateMode] = useState(false);
    const [name, setName] = useState('');
    const saveButtonDisabled = useMemo(() => name.length === 0, [name])

    const onChangeNameInput = useCallback((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setName(event.target.value);
    }, []);

    const onCreateClick = useCallback(async () => {
        await onCreate(name);
        setIsCreateMode(false);
        setName('');
    }, [name]);

    const onCancelClick = useCallback(() => {
        setIsCreateMode(false);
        setName('');
    }, [setIsCreateMode]);

    const onAddButtonClick = useCallback(() => {
        setIsCreateMode(true);
    }, [setIsCreateMode])

    return (
        <AddNameButtonContainer {...rest}>
            {
                isCreateMode ?
                    <InputContainer>
                        <NameField
                            placeholder={inputPlaceholder}
                            variant="outlined"
                            value={name}
                            autoFocus={true}
                            onChange={onChangeNameInput}
                        />
                        <ButtonsContainer>
                            <NameButton variant="contained" onClick={onCreateClick} disabled={saveButtonDisabled}>
                                Create
                            </NameButton>
                            <NameButton variant="text" onClick={onCancelClick}>
                                Cancel
                            </NameButton>
                        </ButtonsContainer>
                    </InputContainer>
                    :
                    <AddButton
                        onClick={onAddButtonClick}
                        variant={'outlined'}
                        startIcon={<IoMdAddCircleOutline/>}>
                        {label}
                    </AddButton>
            }

        </AddNameButtonContainer>
    );
};