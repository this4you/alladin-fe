import { TemplateHeaderContainer, TemplateHeaderLabel } from './styles';
import { interviewTemplateState } from '../../state/interviewTemplateState';
import { MdDeleteOutline } from 'react-icons/md';
import { IconButton } from '@mui/material';
import { useCallback } from 'react';
import { TemplateHeaderName } from './template-header-name';
import { TemplateHeaderProps } from './types';
import { EditableLabel } from '../../../../../../commons/components/editable-label';
import { InterviewTemplateItem } from '../../../application/models/InterviewTemplateItem';

const DEFAULT_HEADER_NAME = 'Interview template-list details';

export const TemplateHeader: React.FC<TemplateHeaderProps> = ({
                                                                  deleteTemplate,
                                                                  updateTemplate
                                                              }) => {
    const onDeleteClick = useCallback(() => {
        if (interviewTemplateState.templateItem === null) {
            return;
        }

        deleteTemplate(interviewTemplateState.templateItem.id);
    }, [interviewTemplateState.templateItem]);

    const onUpdateClick = useCallback(async(name: string) => {
        if (interviewTemplateState.templateItem === null || name === '') {
            return;
        }

        const newTemplateItem: InterviewTemplateItem = {
            ...interviewTemplateState.templateItem,
            name: name,
        };

        await updateTemplate(newTemplateItem);
    }, [interviewTemplateState.templateItem]);

    return (
        <TemplateHeaderContainer>
            {
                (
                    interviewTemplateState.templateItem &&
                    <EditableLabel
                        label={interviewTemplateState.templateItem?.name}
                        labelChanged={onUpdateClick}
                    />
                )
                ||
                <TemplateHeaderLabel>
                    {DEFAULT_HEADER_NAME}
                </TemplateHeaderLabel>
            }
            {
                interviewTemplateState.templateItem &&
                <IconButton aria-label="delete" color={'primary'} size="large" onClick={onDeleteClick}>
                    {/*TODO ADD MENU WITH DOTS HERE*/}
                    <MdDeleteOutline/>
                </IconButton>
            }
        </TemplateHeaderContainer>
    );
}