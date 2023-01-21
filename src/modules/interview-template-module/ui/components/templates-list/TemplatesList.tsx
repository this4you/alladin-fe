import { AddTemplateButton, AddTemplateContainer, TemplatesListContainer } from './styles';
import { CreateTemplateInput } from './create-template-input';
import { interviewTemplateState } from '../../state/interviewTemplateState';
import { TemplatesListProps } from './types';
import { TemplateItems } from './template-items';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { TextField } from '@mui/material';

export const TemplatesList: React.FC<TemplatesListProps> = ({ showCreateTemplateInput }) => {
    return (
        <TemplatesListContainer header={'Templates'}>
            <AddTemplateContainer>
                {interviewTemplateState.isCreateMode ?
                    <CreateTemplateInput/> :
                    <>
                        <AddTemplateButton
                            onClick={showCreateTemplateInput}
                            variant={'outlined'}
                            startIcon={<IoMdAddCircleOutline/>}>
                            Add template
                        </AddTemplateButton>
                        {/*<TextField id="template-search" label="Search ..." variant="standard" />*/}
                    </>
                }
            </AddTemplateContainer>
            <TemplateItems/>
        </TemplatesListContainer>
    );
}