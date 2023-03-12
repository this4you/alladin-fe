import { SelectInterviewStepLabel, TemplateContentContainer } from './styles';
import { TemplateHeader } from '../template-header';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { TemplateContentProps } from './types';

export const TemplateContent: React.FC<TemplateContentProps> = ({state}) => {
    return (
        <TemplateContentContainer>
            <TemplateHeader/>
            {state.templateItem ?
                <Outlet/> //TODO set templateId here
                :
                <SelectInterviewStepLabel>
                    Select interview template...
                </SelectInterviewStepLabel>
            }
        </TemplateContentContainer>
    );
}