
import { Provider } from '../../../config/interviewTemplateStepsContext';
import { useEffect } from 'react';
import { interviewTemplateStepsFactory } from '../../../config/interviewTemplateStepsFactory';
import { TemplateStepsContent } from '../template-steps-content';
import { interviewTemplateFactory } from '../../../../template/config/interviewTemplateFactory';
import { toSnakeCase } from 'commons/utils/cases';

export const TemplateStepsContainer: React.FC = () => {
    const templateContext = interviewTemplateFactory.get({
        key: 'template'
    }); //TODO set as outerComponent context

    const context = interviewTemplateStepsFactory.get({
        key: 'interview-template-steps' + templateContext.state.templateItem
    });

    useEffect(() => (): void => {
        interviewTemplateStepsFactory.clear();
    });

    return(
        <Provider moduleContext={context}>
            <TemplateStepsContent templateId={templateContext.state.templateItem?.id!}
                                  templateName={toSnakeCase(templateContext.state.templateItem?.name!)}/>
        </Provider>
    )
}