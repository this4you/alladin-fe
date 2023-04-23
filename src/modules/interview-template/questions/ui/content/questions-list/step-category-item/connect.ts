import {StepCategoryItem as Component} from './StepCategoryItem';
import { connect } from '../../../../config/interviewTemplateQuestionsContext';

export const StepCategoryItem = connect(Component,
    'stepCategoryUseCase',
    'questionUseCase'
)
