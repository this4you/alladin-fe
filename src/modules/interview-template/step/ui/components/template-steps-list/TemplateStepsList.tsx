import { TemplateStepsListProps } from './types';
import { TemplateStepsAddButtonContainer, TemplateStepsItemsContainer, TemplateStepsItemsEmptyContainer, TemplateStepsListContainer } from './styles';
import { TemplateStepsItem } from './template-steps-item';
import { AddFieldButton } from '../../../../../../commons/components/add-field-button';
import { interviewTemplateStepsState } from '../../state/interviewTemplateStepsState';

export const TemplateStepsList: React.FC<TemplateStepsListProps> = () => {
    return (
        <TemplateStepsListContainer>
            <TemplateStepsAddButtonContainer>
                <AddFieldButton
                    style={{ width: '300px' }}
                    onCreate={() => {
                    }}
                    label={'Add template-list step'}
                    inputPlaceholder={'What is name of step?'}/>
            </TemplateStepsAddButtonContainer>
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
        </TemplateStepsListContainer>
    );
}