
import { Provider } from '../../../config/interviewTemplateStepsContext';
import { useEffect } from 'react';
import { interviewTemplateStepsFactory } from '../../../config/interviewTemplateStepsFactory';
import { TemplateStepsContent } from '../template-steps-content';
import { interviewTemplateFactory } from '../../../../template/config/interviewTemplateFactory';

export const TemplateStepsContainer: React.FC = () => {
    const templateContext = interviewTemplateFactory.get({
        key: 'template'
    });

    const context = interviewTemplateStepsFactory.get({
        key: 'interview-template-steps' + templateContext.state.templateItem
    });

    useEffect(() => (): void => {
        interviewTemplateStepsFactory.clear();
    });

    return(
        <Provider moduleContext={context}>
            <TemplateStepsContent templateId={templateContext.state.templateItem?.id!}/>
        </Provider>
    )
}