import { TemplateStepsListProps } from './types';
import { TemplateStepsListContainer } from './styles';
import { TemplateStepItems } from './template-step-items';
import { AddTemplateStepButton } from './add-tempate-step-button';
import { useEffect } from 'react';
import { interviewTemplateStepsFactory } from '../../../config/interviewTemplateStepsFactory';
import { Provider } from '../../../config/interviewTemplateStepsContext';
import { interviewTemplateState } from '../../../../template-list/ui/state/interviewTemplateState';

export const TemplateStepsList: React.FC<TemplateStepsListProps> = () => {
    const templateId = interviewTemplateState.templateItem?.id;

    useEffect(() => (): void => {
        interviewTemplateStepsFactory.clear();
    });

    if (!templateId) {
        return <></>;
    }

    const context = interviewTemplateStepsFactory.get({
        key: 'interview-template-steps'
    });

    return (
        <Provider moduleContext={context}>
            <TemplateStepsListContainer>
                <AddTemplateStepButton templateId={templateId}/>
                <TemplateStepItems templateId={templateId}/>
            </TemplateStepsListContainer>
        </Provider>
    );
}