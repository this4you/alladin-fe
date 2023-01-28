import { TemplateStepsItemProps } from './types';
import { IndexContainer, TemplateStepsItemContainer } from './styles';

export const TemplateStepsItem: React.FC<TemplateStepsItemProps> = ({ step }) => {
    return (
        <TemplateStepsItemContainer key={step.id}>
            {step.name}
            <IndexContainer>{step.position}</IndexContainer>
        </TemplateStepsItemContainer>
    );
}