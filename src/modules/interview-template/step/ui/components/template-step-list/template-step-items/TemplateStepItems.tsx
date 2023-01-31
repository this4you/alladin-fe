import { TemplateStepItemsProps } from './types';
import { interviewTemplateStepsState } from '../../../state/interviewTemplateStepsState';
import { TemplateStepsItem } from '../template-step-item';
import { useEffect } from 'react';
import { TemplateStepsItemsContainer, TemplateStepsItemsEmptyContainer } from './styles';

export const TemplateStepItems: React.FC<TemplateStepItemsProps> = ({ initTemplateStepsList }) => {

    useEffect(() => {
        initTemplateStepsList();
    }, []);

    return (
        <>
            {
                interviewTemplateStepsState.stepList.length > 0 ?
                    (<TemplateStepsItemsContainer>
                        {interviewTemplateStepsState.stepList.map(it => <TemplateStepsItem key={it.id} step={it}/>)}
                    </TemplateStepsItemsContainer>)
                    :
                    (<TemplateStepsItemsEmptyContainer>
                        Add new step...
                    </TemplateStepsItemsEmptyContainer>)
            }
        </>
    )
}