import { SelectInterviewStepLabel, TemplateContentContainer } from './styles';
import { TemplateStepsList } from '../../step/ui/components/template-step-list';
import { TemplateHeader } from '../../template-list/ui/components/template-header/';
import { interviewTemplateState } from '../../template-list/ui/state/interviewTemplateState';

export const TemplateContent: React.FC = () => {
    return (
        <TemplateContentContainer>
            <TemplateHeader/>
            {interviewTemplateState.templateItem ?
                <TemplateStepsList templateId={interviewTemplateState.templateItem.id}/>
                :
                <SelectInterviewStepLabel>
                    Select interview template...
                </SelectInterviewStepLabel>
            }
        </TemplateContentContainer>
    );
}