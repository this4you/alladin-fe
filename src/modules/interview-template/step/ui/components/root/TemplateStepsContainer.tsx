import { Provider } from '../../../config/interviewTemplateStepsContext';
import { useEffect } from 'react';
import { interviewTemplateStepsFactory } from '../../../config/interviewTemplateStepsFactory';
import { TemplateStepsContent } from '../template-steps-content';
import { toSnakeCase } from 'commons/utils/cases';
import { useOutletContext } from 'react-router-dom';
import { TemplateStepsInputContext } from './types';

export const TemplateStepsContainer: React.FC = () => {
    const { templateId, templateName } = useOutletContext<TemplateStepsInputContext>();

    const context = interviewTemplateStepsFactory.get({
        key: 'interview-template-steps' + templateId
    });

    useEffect(() => (): void => {
        interviewTemplateStepsFactory.clear();
    });

    return (
        <Provider moduleContext={context}>
            <TemplateStepsContent templateId={templateId}
                                  templateName={toSnakeCase(templateName)}/>
        </Provider>
    )
}