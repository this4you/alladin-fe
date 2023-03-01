
import { Provider } from '../../../config/interviewTemplateStepsContext';
import { useEffect } from 'react';
import { interviewTemplateStepsFactory } from '../../../config/interviewTemplateStepsFactory';
import { TemplateStepsContent } from '../template-steps-content';
import { interviewTemplateState } from '../../../../template-list/ui/state/interviewTemplateState';

export const TemplateStepsContainer: React.FC = () => {
    const templateId = interviewTemplateState.templateItem?.id;

    const context = interviewTemplateStepsFactory.get({
        key: 'interview-template-steps' + templateId
    });

    useEffect(() => (): void => {
        interviewTemplateStepsFactory.clear();
    });

    return(
        <Provider moduleContext={context}>
            <TemplateStepsContent/>
        </Provider>
    )
}