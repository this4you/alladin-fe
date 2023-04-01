import { MobXQuestionCategoryState } from '../../state/MobXQuestionCategoryState';
import { QuestionCategoryUseCase } from '../../../application/useCases/QuestionCategoryUseCase';

export type QuestionCategoryModalProps = {
    questionCategoryUseCase: QuestionCategoryUseCase;
    questionCategoryState: MobXQuestionCategoryState;
};
