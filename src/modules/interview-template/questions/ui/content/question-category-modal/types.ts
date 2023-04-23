import { MobXQuestionCategoryState } from '../../state/MobXQuestionCategoryState';
import { QuestionCategoryUseCase } from '../../../application/useCases/QuestionCategoryUseCase';
import { MobXQuestionCategoryView } from '../../view/MobXQuestionCategoryView';
import { StepCategoryUseCase } from '../../../application/useCases/StepCategoryUseCase';

export type QuestionCategoryModalProps = {
    questionCategoryUseCase: QuestionCategoryUseCase;
    questionCategoryState: MobXQuestionCategoryState;
    questionCategoryView: MobXQuestionCategoryView;
    stepCategoryUseCase: StepCategoryUseCase;
};
