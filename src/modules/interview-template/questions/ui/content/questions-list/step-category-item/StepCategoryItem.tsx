import { StepCategoryItemProps } from './types';
import { StepCategoryColor, StepCategoryItemContainer, StepCategoryNameContainer, QuestionsList, AddQuestionButton, AddQuestionButtonContainer, DeleteStepCategoryButton } from './styles';
import { QuestionItem } from '../question-item';
import { MdDeleteOutline, MdExpandMore } from 'react-icons/md';

export const StepCategoryItem: React.FC<StepCategoryItemProps> = ({
    stepCategory,
    stepCategoryUseCase,
    questionUseCase
}) => {
    return (
        <StepCategoryItemContainer>
            <StepCategoryNameContainer expandIcon={<MdExpandMore/>}>
                <StepCategoryColor/>
                <span>{stepCategory.categoryName}</span>
                <DeleteStepCategoryButton
                    aria-label="delete"
                    color={'primary'}
                    size="large"
                    onClick={() => stepCategoryUseCase.delete(stepCategory.stepCategoryId)}
                >
                    <MdDeleteOutline/>
                </DeleteStepCategoryButton>
            </StepCategoryNameContainer>
            <QuestionsList>
                {
                    stepCategory.questions.map(it => <QuestionItem
                        key={it.id}
                        question={it}
                        stepCategoryId={stepCategory.stepCategoryId}
                    />)
                }
                <AddQuestionButton
                    label={'Add new question'}
                    inputPlaceholder={'What is your question?'}
                    onCreate={(text: string) => questionUseCase.create(stepCategory.stepCategoryId, text)}
                />
            </QuestionsList>
        </StepCategoryItemContainer>
    );
}