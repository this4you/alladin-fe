import { TemplateStepsListProps } from './types';
import { TemplateStepsAddButtonContainer, TemplateStepsItemsContainer, TemplateStepsItemsEmptyContainer, TemplateStepsListContainer } from './styles';
import { TemplateStepsItem } from '../template-steps-item';
import { AddNameButton } from '../../add-name-button';
import { interviewTemplateStepsState } from '../../../state/interviewTemplateStepsState';

export const TemplateStepsList: React.FC<TemplateStepsListProps> = () => {
    return (
        <TemplateStepsListContainer>
            <TemplateStepsAddButtonContainer>
                <AddNameButton
                    style={{ width: '300px' }}
                    onCreate={() => {
                    }}
                    label={'Add template step'}
                    inputPlaceholder={'What is name of step?'}/>
            </TemplateStepsAddButtonContainer>
            {
                interviewTemplateStepsState.stepList.length > 0 ?
                    (<TemplateStepsItemsContainer>
                        {interviewTemplateStepsState.stepList.map(it => <TemplateStepsItem step={it}/>)}
                    </TemplateStepsItemsContainer>)
                    :
                    (<TemplateStepsItemsEmptyContainer>
                        Add new step...
                    </TemplateStepsItemsEmptyContainer>)
            }
        </TemplateStepsListContainer>
    );
}