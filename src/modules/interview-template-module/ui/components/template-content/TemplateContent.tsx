import { TemplateContentContainer } from './styles';
import { interviewTemplateState } from '../../state/interviewTemplateState';

export const TemplateContent: React.FC = () => {
    return (
        <TemplateContentContainer header={ interviewTemplateState.templateItem?.name || 'Interview template details'}>

        </TemplateContentContainer>
    );
}