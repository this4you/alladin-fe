import { AddTemplateButton, AddTemplateButtonContainer, NoTemplates, NoTemplatesContainer, TemplatesListContainer } from './styles';
import { useCallback, useState } from 'react';
import { CreateTemplateInput } from './create-template-input';
import { interviewTemplateState } from '../../state/interviewTemplateState';


const TemplatesList: React.FC = () => {
    const [isCreateMode, setIsCreateMode] = useState(false);

    const onCreateTemplateClick = useCallback(() => {
        setIsCreateMode(true);
    }, [setIsCreateMode])

    const onCancelClick = useCallback(() => {
        setIsCreateMode(false);
    }, [setIsCreateMode]);

    return (
        <TemplatesListContainer header={'Templates'}>
            <AddTemplateButtonContainer>
                {!isCreateMode &&
                    <AddTemplateButton onClick={onCreateTemplateClick} variant={'contained'}>+</AddTemplateButton>}

                {isCreateMode && <CreateTemplateInput onCancelClick={onCancelClick}/>}
            </AddTemplateButtonContainer>

            {interviewTemplateState.templatesList.length === 0 && (
                <NoTemplates>
                    Add new template
                </NoTemplates>
            )}
        </TemplatesListContainer>
    );
}

export default TemplatesList;