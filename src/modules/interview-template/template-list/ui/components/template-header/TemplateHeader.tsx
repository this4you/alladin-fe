import { TemplateHeaderContainer, TemplateHeaderLabel } from './styles';
import { interviewTemplateState } from '../../state/interviewTemplateState';
import { MdDeleteOutline } from 'react-icons/md';
import { IconButton } from '@mui/material';
import { useCallback } from 'react';
import { TemplateHeaderName } from './template-header-name';
import { TemplateHeaderProps } from './types';

const DEFAULT_HEADER_NAME = 'Interview template-list details';

export const TemplateHeader: React.FC<TemplateHeaderProps> = ({ deleteTemplate }) => {

    const onDeleteClick = useCallback(() => {
        if (interviewTemplateState.templateItem === null) {
            return;
        }

        deleteTemplate(interviewTemplateState.templateItem.id);
    }, [interviewTemplateState.templateItem])

    return (
        <TemplateHeaderContainer>
            {
                (
                    interviewTemplateState.templateItem &&
                    <TemplateHeaderName template={interviewTemplateState.templateItem}/>
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