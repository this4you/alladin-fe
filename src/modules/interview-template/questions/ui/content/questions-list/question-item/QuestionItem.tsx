import { QuestionItemProps } from './types';
import { DeleteQuestionButton, QuestionItemColor, QuestionItemWrapper } from './styles';
import { EditableLabel } from 'commons/components/editable-label';
import { MdDeleteOutline } from 'react-icons/md';

export const QuestionItem: React.FC<QuestionItemProps> = ({ question , questionUseCase, questionCategoryId}) => {
    return (
        <QuestionItemWrapper>
            <QuestionItemColor/>
            <EditableLabel label={question.text} labelChanged={async (value: string) => {
                return true
            }}/>
            <DeleteQuestionButton
                aria-label="delete"
                color={'primary'}
                size="large"
                onClick={() => questionUseCase.delete(question.id, questionCategoryId)}
            >
                <MdDeleteOutline/>
            </DeleteQuestionButton>
        </QuestionItemWrapper>
    );
}
