import { AddTemplateButton, AddTemplateContainer, TemplatesListContainer } from './styles';
import { CreateTemplateInput } from './create-template-input';
import { interviewTemplateState } from '../../state/interviewTemplateState';
import { TemplatesListProps } from './types';
import { TemplateItems } from './template-items';

export const TemplatesList: React.FC<TemplatesListProps> = ({ showCreateTemplateInput }) => {
    return (
        <TemplatesListContainer header={'Templates'}>
            <AddTemplateContainer>
                {interviewTemplateState.isCreateMode ?
                    <CreateTemplateInput/> :
                    <AddTemplateButton onClick={showCreateTemplateInput} variant={'contained'}>
                        +
                    </AddTemplateButton>}
            </AddTemplateContainer>
            <TemplateItems/>
        </TemplatesListContainer>
    );
}