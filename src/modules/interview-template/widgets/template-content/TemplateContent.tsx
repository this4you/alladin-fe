import { TemplateContentContainer } from './styles';
import { TemplateStepsList } from '../../step/ui/components/template-steps-list';
import { TemplateHeader } from '../../template-list/ui/components/template-header/';

export const TemplateContent: React.FC = () => {
    return (
        <TemplateContentContainer>
            <TemplateHeader/>
            <TemplateStepsList/>
        </TemplateContentContainer>
    );
}