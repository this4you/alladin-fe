import { EditableLabelContainer, TemplateHeaderContainer, TemplateHeaderLabel } from './styles';
import { MdDeleteOutline } from 'react-icons/md';
import { IconButton } from '@mui/material';
import { useCallback } from 'react';
import { TemplateHeaderProps } from './types';
import { EditableLabel } from 'commons/components/editable-label';
import { InterviewTemplateItem } from '../../../application/models/InterviewTemplateItem';

const DEFAULT_HEADER_NAME = 'Interview template details';

export const TemplateHeader: React.FC<TemplateHeaderProps> = ({
    deleteTemplate,
    updateTemplate,
    state
}) => {
    const onDeleteClick = useCallback(() => {
        if (state.templateItem === null) {
            return;
        }

        deleteTemplate(state.templateItem.id);
    }, [state.templateItem]);

    const onUpdateClick = useCallback(async (name: string) => {
        if (state.templateItem === null || name === '') {
            return  false;
        }

        const newTemplateItem: InterviewTemplateItem = {
            ...state.templateItem,
            name: name,
        };

        return await updateTemplate(newTemplateItem);
    }, [state.templateItem]);

    return (
        <TemplateHeaderContainer>
            {
                (
                    state.templateItem &&
                    <EditableLabelContainer>
                        <EditableLabel
                            label={state.templateItem?.name}
                            labelChanged={onUpdateClick}
                        />
                    </EditableLabelContainer>
                )
                ||
                <TemplateHeaderLabel>
                    {DEFAULT_HEADER_NAME}
                </TemplateHeaderLabel>
            }
            {
                state.templateItem &&
                <IconButton aria-label="delete" color={'primary'} size="large" onClick={onDeleteClick}>
                    {/*TODO ADD MENU WITH DOTS HERE*/}
                    <MdDeleteOutline/>
                </IconButton>
            }
        </TemplateHeaderContainer>
    );
}