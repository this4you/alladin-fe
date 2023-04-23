import { Question } from '../../../../application/models/Question';
import { QuestionUseCase } from '../../../../application/useCases/QuestionUseCase';

export type QuestionItemProps = {
    question: Question;
    questionCategoryId: string;
    questionUseCase: QuestionUseCase;
};
