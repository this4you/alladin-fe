import { TemplateStepsContentContainer } from './styles';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TemplateStepsList } from '../template-step-list';
import { TemplateStepsContentProps } from './types';

export const TemplateStepsContent: React.FC<TemplateStepsContentProps> = ({state, templateId}) => {
    return (
        <TemplateStepsContentContainer>
            {
                state.activeStep ?
                    <Outlet context={{ stepId: state.activeStep.id }}/> :
                    <TemplateStepsList templateId={templateId}/>
            }
        </TemplateStepsContentContainer>
    );
}