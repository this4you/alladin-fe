import { TemplateStepsListProps } from './types';
import { TemplateStepsListContainer } from './styles';
import { TemplateStepItems } from './template-step-items';
import { AddTemplateStepButton } from './add-tempate-step-button';

export const TemplateStepsList: React.FC<TemplateStepsListProps> = ({ templateId }) => {
    return (
        <TemplateStepsListContainer>
            <AddTemplateStepButton/>
            <TemplateStepItems/>
        </TemplateStepsListContainer>
    );
}