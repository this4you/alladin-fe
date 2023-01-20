import { AddTemplateButton, AddTemplateContainer, NoTemplates, NoTemplatesContainer, TemplatesListContainer } from './styles';
import { CreateTemplateInput } from './create-template-input';
import { interviewTemplateState } from '../../state/interviewTemplateState';
import { TemplatesListProps } from './types';

export const TemplatesList: React.FC<TemplatesListProps> = ({showCreateTemplateInput}) => {
    return (
        <TemplatesListContainer header={'Templates'}>
            <AddTemplateContainer>
                {!interviewTemplateState.isCreateMode &&
                    <AddTemplateButton onClick={showCreateTemplateInput} variant={'contained'}>+</AddTemplateButton>}

                {interviewTemplateState.isCreateMode && <CreateTemplateInput/>}
            </AddTemplateContainer>

            {interviewTemplateState.templatesList.length === 0 && (
                <NoTemplates>
                    Add new template
                </NoTemplates>
            )}
        </TemplatesListContainer>
    );
}