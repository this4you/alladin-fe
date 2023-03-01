import { TemplateStepsContentContainer } from './styles';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TemplateStepsList } from '../../step/ui/components/template-step-list';
import { interviewTemplateStepsState } from '../../step/ui/state/interviewTemplateStepsState';

export const TemplateStepsContent: React.FC = () => {
    const step = interviewTemplateStepsState.activeStep;
    console.log('STEP', step);
    return (
        <TemplateStepsContentContainer>
            {
                step ?
                    <Outlet context={{ stepId: step.id }}/> :
                    <TemplateStepsList/>
            }
        </TemplateStepsContentContainer>
    );
}