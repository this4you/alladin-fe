import {TemplatesListContainer } from './styles';
import { TemplateItems } from './template-items';
import { AddTemplateButton } from './add-template-button';

export const TemplatesList: React.FC = () => {
    return (
        <TemplatesListContainer header={'Templates'}>
            <AddTemplateButton/>
            <TemplateItems/>
        </TemplatesListContainer>
    );
}