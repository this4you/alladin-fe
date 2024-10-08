import { EditableLabelProps } from './types';
import { useCallback, useEffect, useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { HiXMark } from 'react-icons/hi2';
import { ButtonsContainer, EditField, EditFieldContainer, IconContainer, LabelContainer } from './styles';

export const EditableLabel: React.FC<EditableLabelProps> = ({
    label,
    labelChanged,
    hideButtons = false
}) => {
    const [initValue, setInitValue] = useState(label);
    const [editMode, setEditMode] = useState(false);
    const [editValue, setEditValue] = useState(initValue);

    const onLabelChanged = async () => {
        if (editValue === label) {
            return;
        }

        const result = await labelChanged(editValue);

        if (result) {
            setInitValue(editValue);
        } else {
            setEditValue(initValue);
        }
    }

    const onLabelClick = useCallback(() => {
        setEditMode(true)
    }, [setEditMode]);

    const onFieldChanged = useCallback((e: any) => {
        setEditValue(e?.target?.value || '');
    }, [setEditMode, setEditValue, editValue]);

    const onBlurHandler = useCallback(async (e: any) => {
        if (!e) return;

        if (e?.relatedTarget?.id === 'save-template-name'
            || e?.relatedTarget?.id === 'cancel-template-name') {
            return;
        }

        setEditMode(false);

        onLabelChanged();
    }, [editValue, onLabelChanged])

    const onCancelClick = useCallback((e: any) => {
        setEditMode(false);
        setEditValue(label);
    }, [label])

    const onSaveClick = useCallback(async (e: any) => {
        setEditMode(false);
        onLabelChanged()
    }, [onLabelChanged, editValue])

    useEffect(() => {
        setEditMode(false);
        setEditValue(label);
    }, [label])

    return (
        <>
            {
                !editMode ?
                    <LabelContainer onClick={onLabelClick}>
                        {editValue}
                    </LabelContainer>
                    :
                    <EditFieldContainer>
                        <EditField
                            variant="outlined"
                            value={editValue}
                            onChange={onFieldChanged}
                            onBlur={onBlurHandler}
                            autoFocus={true}
                        />
                        {
                            !hideButtons &&
                            <ButtonsContainer>
                                <IconContainer id={'save-template-name'} tabIndex={0} onClick={onSaveClick}>
                                    <IoMdCheckmark/>
                                </IconContainer>
                                <IconContainer id={'cancel-template-name'} tabIndex={1} onClick={onCancelClick}>
                                    <HiXMark/>
                                </IconContainer>
                            </ButtonsContainer>
                        }
                    </EditFieldContainer>

            }
        </>
    );
}