import { SelectInterviewStepLabel, TemplateContentContainer } from './styles';
import { TemplateHeader } from '../../template-list/ui/components/template-header/';
import { interviewTemplateState } from '../../template-list/ui/state/interviewTemplateState';
import { Outlet } from 'react-router-dom';
import React from 'react';

export const TemplateContent: React.FC = () => {
    return (
        <TemplateContentContainer>
            <TemplateHeader/>
            {interviewTemplateState.templateItem ?
                <Outlet/>
                :
                <SelectInterviewStepLabel>
                    Select interview template...
                </SelectInterviewStepLabel>
            }
        </TemplateContentContainer>
    );
}