import { TemplateContentHeaderNameProps } from './types';
import { ButtonsContainer, IconContainer, TemplateContentHeaderNameContainer, TemplateContentHeaderNameEditField, TemplateContentHeaderNameEditFieldContainer } from './styles';
import { useCallback, useEffect, useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { HiXMark } from 'react-icons/hi2';

export const TemplateContentHeaderName: React.FC<TemplateContentHeaderNameProps> = ({ template }) => {
    const [editMode, setEditMode] = useState(false);
    const [editValue, setEditValue] = useState(template.name);

    const onNameContainerClick = useCallback(() => {
        setEditMode(true)
    }, [setEditMode])

    const onEditValueChanged = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEditValue(e.target.value)
    }, [setEditMode])

    const onBlurHandler = useCallback((e: any) => {
        if (!e) return;

        if (e?.relatedTarget?.id === 'save-template-name'
            || e?.relatedTarget?.id === 'cancel-template-name') {
            return;
        }

        setEditMode(false);
    }, [])

    const onCancelClick = useCallback((e: any) => {
        setEditMode(false);
        setEditValue(template.name);
    }, [])

    useEffect(() => {
        setEditMode(false);
        setEditValue(template.name);
    }, [template])

    return (
        <>
            {editMode ?
                <TemplateContentHeaderNameEditFieldContainer>
                    <TemplateContentHeaderNameEditField
                        variant="outlined"

                        value={editValue}
                        onChange={onEditValueChanged}
                        onBlur={onBlurHandler}
                        autoFocus={true}
                    />
                    <ButtonsContainer>
                        <IconContainer id={'save-template-name'} tabIndex={0}>
                            <IoMdCheckmark/>
                        </IconContainer>
                        <IconContainer id={'cancel-template-name'} tabIndex={1} onClick={onCancelClick}>
                            <HiXMark/>
                        </IconContainer>
                    </ButtonsContainer>
                </TemplateContentHeaderNameEditFieldContainer>
                :
                <TemplateContentHeaderNameContainer onClick={onNameContainerClick}>
                    {template.name}
                </TemplateContentHeaderNameContainer>
            }
        </>
    );
}