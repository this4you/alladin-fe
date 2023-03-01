import { TemplateStepsListContainer } from './styles';
import { TemplateStepItems } from './template-step-items';
import { AddTemplateStepButton } from './add-tempate-step-button';
import { interviewTemplateState } from '../../../../template-list/ui/state/interviewTemplateState';

export const TemplateStepsList: React.FC = () => {
    const templateId = interviewTemplateState.templateItem?.id;

    if (!templateId) {
        return <></>;
    }

    return (
        <TemplateStepsListContainer>
            <AddTemplateStepButton templateId={templateId}/>
            <TemplateStepItems templateId={templateId}/>
        </TemplateStepsListContainer>
    );
}