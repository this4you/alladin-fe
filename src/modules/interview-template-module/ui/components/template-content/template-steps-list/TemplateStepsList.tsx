import { TemplateStepsListProps } from './types';
import { TemplateStepsListContainer } from './styles';
import { TemplateStepsItem } from '../template-steps-item';

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

export const TemplateStepsList: React.FC<TemplateStepsListProps> = ({}) => {
    return (
        <TemplateStepsListContainer>
            {list.map(it => <TemplateStepsItem step={it}/>)}
        </TemplateStepsListContainer>
    );
}