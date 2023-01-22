import { AddButtonContainer, AddTemplateButton, ConfigContainer, SearchField, TemplatesListContainer } from './styles';
import { CreateTemplateInput } from './create-template-input';
import { interviewTemplateState } from '../../state/interviewTemplateState';
import { TemplatesListProps } from './types';
import { TemplateItems } from './template-items';
import { IoMdAddCircleOutline } from 'react-icons/io';

export const TemplatesList: React.FC<TemplatesListProps> = ({ showCreateTemplateInput }) => {
    return (
        <TemplatesListContainer header={'Templates'}>
            <ConfigContainer>
                {interviewTemplateState.isCreateMode ?
                    <CreateTemplateInput/> :
                    <AddButtonContainer>
                        <AddTemplateButton
                            onClick={showCreateTemplateInput}
                            variant={'outlined'}
                            startIcon={<IoMdAddCircleOutline/>}>
                            Add template
                        </AddTemplateButton>
                        <SearchField placeholder={'Search ...'} variant="standard" />
                    </AddButtonContainer>
                }
            </ConfigContainer>
            <TemplateItems/>
        </TemplatesListContainer>
    );
}