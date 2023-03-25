import { QuestionItemProps } from './types';
import { QuestionItemColor, QuestionItemWrapper } from './styles';
import { EditableLabel } from 'commons/components/editable-label/EditableLabel';

export const QuestionItem: React.FC<QuestionItemProps> = ({ question }) => {
    return (
        <QuestionItemWrapper>
            <QuestionItemColor/>
            <EditableLabel label={question.text} labelChanged={async (value: string) => {
                return true
            }}/>
        </QuestionItemWrapper>
    );
}
