import { TemplateStepsListProps } from './types';
import { TemplateStepsAddButtonContainer, TemplateStepsItemsContainer, TemplateStepsListContainer } from './styles';
import { TemplateStepsItem } from '../template-steps-item';
import { AddNameButton } from '../../add-name-button';

const list = [
    {
        id: '1',
        position: 1,
        name: 'HR'
    },
    {
        id: '2',
        position: 2,
        name: 'English'
    },
    {
        id: '3',
        position: 3,
        name: 'Technical'
    },
    {
        id: '4',
        position: 4,
        name: 'Project manager'
    },
    {
        id: '5',
        position: 5,
        name: 'Owner'
    },
    {
        id: '6',
        position: 6,
        name: 'Salary discussion session'
    },
    {
        id: '7',
        position: 7,
        name: 'On boarding'
    },

];

export const TemplateStepsList: React.FC<TemplateStepsListProps> = () => {
    return (
        <TemplateStepsListContainer>
            <TemplateStepsAddButtonContainer>
                <AddNameButton style={{ width: '300px' }} onCreate={() => {
                }} label={'Add template step'} inputPlaceholder={'What is name of step?'}/>
            </TemplateStepsAddButtonContainer>
            <TemplateStepsItemsContainer>
                {list.map(it => <TemplateStepsItem step={it}/>)}
            </TemplateStepsItemsContainer>
        </TemplateStepsListContainer>
    );
}