import { TemplateQuestionsModuleContainer } from './styles';
import { TemplateQuestionsBreadcrumbs } from '../questions-breadcrumbs';
import { useOutletContext } from 'react-router-dom';
import { QuestionModuleInputContext } from './types';
import { QuestionsList } from '../questions-list';

export const TemplateQuestionsModule: React.FC = () => {
    const { step, template, clearActiveStep } = useOutletContext<QuestionModuleInputContext>();

    return (
        <TemplateQuestionsModuleContainer>
            <TemplateQuestionsBreadcrumbs
                template={template}
                activeStepName={step.name}
                clearActiveStep={clearActiveStep}
            />
            <QuestionsList/>
        </TemplateQuestionsModuleContainer>
    )
}