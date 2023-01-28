import { TemplateContentContainer, TemplateContentHeader, TemplateContentHeaderLabel } from './styles';
import { interviewTemplateState } from '../../state/interviewTemplateState';
import { MdDeleteOutline } from 'react-icons/md';
import { IconButton } from '@mui/material';
import { TemplateContentProps } from './types';
import { useCallback } from 'react';
import { TemplateContentHeaderName } from './template-content-header-name';

const DEFAULT_HEADER_NAME = 'Interview template details';

export const TemplateContent: React.FC<TemplateContentProps> = ({ deleteTemplate }) => {

    const onDeleteClick = useCallback(() => {
        if (interviewTemplateState.templateItem === null) {
            return;
        }

        deleteTemplate(interviewTemplateState.templateItem.id);
    }, [interviewTemplateState.templateItem])

    return (
        <TemplateContentContainer>
            <TemplateContentHeader>
                {
                    (
                        interviewTemplateState.templateItem &&
                        <TemplateContentHeaderName template={interviewTemplateState.templateItem}/>
                    )
                    ||
                    <TemplateContentHeaderLabel>
                        {DEFAULT_HEADER_NAME}
                    </TemplateContentHeaderLabel>
                }
                {
                    interviewTemplateState.templateItem &&
                    <IconButton aria-label="delete" color={'primary'} size="large" onClick={onDeleteClick}>
                        {/*TODO ADD MENU WITH DOTS HERE*/}
                        <MdDeleteOutline/>
                    </IconButton>
                }
            </TemplateContentHeader>
        </TemplateContentContainer>
    );
}