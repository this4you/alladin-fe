import { QuestionsListProps } from './types';
import { AddCategoryButton, QuestionListContainer, Questions } from './styles';
import { StepCategoryItem } from './step-category-item';
import { IoMdAddCircleOutline } from 'react-icons/io';

const questionsList = [
    {
        stepCategoryId: '1',
        categoryName: 'Git',
        position: 1,
        questions: [
            {
                id: '1',
                text: 'Question1',
                position: 1,
            },
            {
                id: '2',
                text: 'Question2',
                position: 2,
            }
        ]
    },
    {
        stepCategoryId: '2',
        categoryName: 'SQL',
        position: 2,
        questions: []
    },
    {
        stepCategoryId: '3',
        categoryName: 'React',
        position: 2,
        questions: []
    },
    {
        stepCategoryId: '4',
        categoryName: 'Redux',
        position: 2,
        questions: []
    },
    {
        stepCategoryId: '5',
        categoryName: 'Styled-components',
        position: 2,
        questions: []
    },
];
export const QuestionsList: React.FC<QuestionsListProps> = () => {
    //initial logic
    return (
        <QuestionListContainer>
            <AddCategoryButton variant={'outlined'} startIcon={<IoMdAddCircleOutline/>}>
                Add new question category
            </AddCategoryButton>
            <Questions>
                {questionsList.map(it => <StepCategoryItem key={it.stepCategoryId} stepCategory={it}/>)}
            </Questions>
        </QuestionListContainer>
    );
}