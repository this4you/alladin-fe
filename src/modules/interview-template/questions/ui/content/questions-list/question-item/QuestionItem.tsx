import { QuestionItemProps } from './types';
import { DeleteQuestionButton, QuestionItemColor, QuestionItemWrapper } from './styles';
import { EditableLabel } from 'commons/components/editable-label';
import { MdDeleteOutline } from 'react-icons/md';

export const QuestionItem: React.FC<QuestionItemProps> = ({ question , questionUseCase, stepCategoryId}) => {
    return (
        <QuestionItemWrapper>
            <QuestionItemColor/>
            <EditableLabel label={question.text} labelChanged={(value: string) => questionUseCase.update(question.id, value, stepCategoryId)}/>
            <DeleteQuestionButton
                aria-label="delete"
                color={'primary'}
                size="large"
                onClick={() => questionUseCase.delete(question.id, stepCategoryId)}
            >
                <MdDeleteOutline/>
            </DeleteQuestionButton>
        </QuestionItemWrapper>
    );
}
