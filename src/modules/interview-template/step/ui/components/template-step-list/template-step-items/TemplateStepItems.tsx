import { TemplateStepItemsProps } from './types';
import { interviewTemplateStepsState } from '../../../state/interviewTemplateStepsState';
import { TemplateStepsItem } from '../template-step-item';
import { useEffect } from 'react';
import { TemplateStepsItemsContainer, TemplateStepsItemsEmptyContainer } from './styles';

export const TemplateStepItems: React.FC<TemplateStepItemsProps> = ({ initTemplateStepsList, templateId }) => {

    useEffect(() => {
        initTemplateStepsList(templateId);
    }, [templateId]);

    return (
        <>
            {
                interviewTemplateStepsState.stepsList.length > 0 ?
                    (<TemplateStepsItemsContainer>
                        {interviewTemplateStepsState.stepsList.map(it => <TemplateStepsItem key={it.id} step={it}/>)}
                    </TemplateStepsItemsContainer>)
                    :
                    (<TemplateStepsItemsEmptyContainer>
                        Add new step...
                    </TemplateStepsItemsEmptyContainer>)
            }
        </>
    )
}