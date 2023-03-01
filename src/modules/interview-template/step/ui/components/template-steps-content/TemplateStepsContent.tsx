import { TemplateStepsContentContainer } from './styles';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TemplateStepsList } from '../template-step-list';
import { TemplateStepsContentProps } from './types';

export const TemplateStepsContent: React.FC<TemplateStepsContentProps> = ({state}) => {
    return (
        <TemplateStepsContentContainer>
            {
                // state.activeStep ?
                //     <Outlet context={{ stepId: state.activeStep.id }}/> :
                //     <TemplateStepsList/>
                state.activeStep ?
                    <h1>Active step {JSON.stringify(state.activeStep)}</h1> :
                    <TemplateStepsList/>
            }
        </TemplateStepsContentContainer>
    );
}