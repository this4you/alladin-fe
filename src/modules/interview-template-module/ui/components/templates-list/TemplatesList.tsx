import { AddTemplateButton, NoTemplates, NoTemplatesContainer, TemplatesListContainer } from './styles';

const templatesItems = [];

const TemplatesList: React.FC = () => {
    return (
        <TemplatesListContainer header={'Templates'}><AddTemplateButton variant={'contained'}>+</AddTemplateButton>
            {templatesItems.length === 0 && (
                <NoTemplatesContainer>
                    <NoTemplates>
                        Add new template
                    </NoTemplates>
                </NoTemplatesContainer>
            )}
        </TemplatesListContainer>
    );
}

export default TemplatesList;