import { TemplateStepsContentContainer } from './styles';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TemplateStepsList } from '../template-step-list';
import { TemplateStepsContentProps } from './types';
import { QuestionModuleInputContext } from 'modules/interview-template/questions';

export const TemplateStepsContent: React.FC<TemplateStepsContentProps> = ({ state, templateId, templateName }) => {
    const questionModuleContext:QuestionModuleInputContext = {
        step: state.activeStep!,
        template: templateName,
        clearActiveStep: () => state.setActiveStep(null)
    };
    return (
        <TemplateStepsContentContainer>
            {
                state.activeStep
                    ? <Outlet context={questionModuleContext}/>
                    : <TemplateStepsList templateId={templateId}/>
            }
        </TemplateStepsContentContainer>
    );
}