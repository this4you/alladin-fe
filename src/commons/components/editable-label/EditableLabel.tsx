import { EditableLabelProps } from './types';
import { useCallback, useEffect, useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { HiXMark } from 'react-icons/hi2';
import { ButtonsContainer, EditField, EditFieldContainer, IconContainer, LabelContainer } from './styles';

export const EditableLabel: React.FC<EditableLabelProps> = ({ label, labelChanged }) => {
    const [editMode, setEditMode] = useState(false);
    const [editValue, setEditValue] = useState(label);

    const onLabelClick = useCallback(() => {
        setEditMode(true)
    }, [setEditMode]);

    const onFieldChanged = useCallback((e: any) => {
        setEditValue(e?.target?.value || '');
    }, [setEditMode, setEditValue, editValue]);

    const onBlurHandler = useCallback(async (e: any) => {
        if (!e) return;

        if (e?.relatedTarget?.id === 'save-template-list-name'
            || e?.relatedTarget?.id === 'cancel-template-list-name') {
            return;
        }

        setEditMode(false);
        labelChanged(editValue);
    }, [editValue, labelChanged])

    const onCancelClick = useCallback((e: any) => {
        setEditMode(false);
        setEditValue(label);
    }, [label])

    const onSaveClick = useCallback(async (e: any) => {
        setEditMode(false);
        labelChanged(editValue);
    }, [labelChanged, editValue])

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
                        variant='outlined'
                        value={editValue}
                        onChange={onFieldChanged}
                        onBlur={onBlurHandler}
                        autoFocus={true}
                    />
                    <ButtonsContainer>
                        <IconContainer id={'save-template-list-name'} tabIndex={0} onClick={onSaveClick}>
                            <IoMdCheckmark/>
                        </IconContainer>
                        <IconContainer id={'cancel-template-list-name'} tabIndex={1} onClick={onCancelClick}>
                            <HiXMark/>
                        </IconContainer>
                    </ButtonsContainer>
                </EditFieldContainer>

            }
        </>
    );
}