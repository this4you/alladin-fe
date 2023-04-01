import React from 'react';
import { TemplateQuestionsModuleContainer } from './styles';
import { TemplateQuestionsBreadcrumbs } from '../questions-breadcrumbs';
import { useOutletContext } from 'react-router-dom';
import { QuestionModuleInputContext } from './types';
import { QuestionsList } from '../questions-list';
import { interviewTemplateQuestionsFactory } from '../../../config/interviewTemplateQuestionsFactory';
import { Provider } from '../../../config/interviewTemplateQuestionsContext';

export const TemplateQuestionsModule: React.FC = () => {
    const { step, template, clearActiveStep } = useOutletContext<QuestionModuleInputContext>();

    const questionContext = interviewTemplateQuestionsFactory.get({
        key: 'question' + template,
        stepId: step.id
    });

    return (
        <Provider moduleContext={questionContext}>
            <TemplateQuestionsModuleContainer>
                <TemplateQuestionsBreadcrumbs
                    template={template}
                    activeStepName={step.name}
                    clearActiveStep={clearActiveStep}
                />
                <QuestionsList/>
            </TemplateQuestionsModuleContainer>
        </Provider>
    )
}