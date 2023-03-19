import { StepCategoryItemProps } from './types';
import { StepCategoryColor, StepCategoryItemContainer, StepCategoryNameContainer, QuestionsList } from './styles';
import { QuestionItem } from '../question-item';
import { MdExpandMore } from 'react-icons/md';

export const StepCategoryItem: React.FC<StepCategoryItemProps> = ({stepCategory}) => {
    return (
        <StepCategoryItemContainer {...(stepCategory.questions.length > 0 ? {} : {expanded: true})}>
            <StepCategoryNameContainer expandIcon={<MdExpandMore/>}>
                <StepCategoryColor/>
                <span>{stepCategory.categoryName}</span>
            </StepCategoryNameContainer>
            <QuestionsList>
                {
                    stepCategory.questions.map(it => <QuestionItem key={it.id} question={it} />)
                }
            </QuestionsList>
        </StepCategoryItemContainer>
    );
}