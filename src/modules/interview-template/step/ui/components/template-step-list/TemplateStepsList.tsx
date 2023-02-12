import { TemplateStepsListProps } from './types';
import { TemplateStepsListContainer } from './styles';
import { TemplateStepItems } from './template-step-items';
import { AddTemplateStepButton } from './add-tempate-step-button';
import { useEffect } from 'react';
import { interviewTemplateStepsFactory } from '../../../config/interviewTemplateStepsFactory';
import { Provider } from '../../../config/interviewTemplateStepsContext';

export const TemplateStepsList: React.FC<TemplateStepsListProps> = ({ templateId }) => {
    const context = interviewTemplateStepsFactory.get({
        key: templateId,
        templateId: templateId
    });

    useEffect(() => (): void => {
        interviewTemplateStepsFactory.clear();
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