import { TemplateStepsContentContainer } from './styles';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TemplateStepsList } from '../../step/ui/components/template-step-list';

export const TemplateStepsContent: React.FC = () => {
    return (
        <TemplateStepsContentContainer>
            {
                // step ?
                //     <Outlet context={{ stepId: step.id }}/> :
                //     <TemplateStepsList/>
                <TemplateStepsList/>
            }
        </TemplateStepsContentContainer>
    );
}