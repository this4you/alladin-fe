import { AddButtonContainer, AddTemplateButton, ConfigContainer, SearchField, TemplatesListContainer } from './styles';
import { CreateTemplateInput } from './create-template-input';
import { interviewTemplateListState } from '../../state/interviewTemplateListState';
import { TemplatesListProps } from './types';
import { TemplateItems } from './template-items';
import { IoMdAddCircleOutline } from 'react-icons/io';

export const TemplatesList: React.FC<TemplatesListProps> = ({ showCreateTemplateInput }) => {
    return (
        <TemplatesListContainer header={'Templates'}>
            <ConfigContainer>
                {interviewTemplateListState.isCreateMode ?
                    <CreateTemplateInput/> :
                    <AddButtonContainer>
                        <AddTemplateButton
                            onClick={showCreateTemplateInput}
                            variant={'outlined'}
                            startIcon={<IoMdAddCircleOutline/>}>
                            Add template
                        </AddTemplateButton>
                    </AddButtonContainer>
                }
            </ConfigContainer>
            <TemplateItems/>
        </TemplatesListContainer>
    );
}