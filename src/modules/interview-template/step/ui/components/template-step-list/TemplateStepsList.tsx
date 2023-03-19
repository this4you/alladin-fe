import { TemplateStepsListContainer } from './styles';
import { TemplateStepItems } from './template-step-items';
import { AddTemplateStepButton } from './add-tempate-step-button';
import { TemplateStepsListProps } from './types';

export const TemplateStepsList: React.FC<TemplateStepsListProps> = ({templateId}) => {

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