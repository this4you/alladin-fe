import { QuestionsList as Component } from './QuestionsList';
import { connect } from '../../../config/interviewTemplateQuestionsContext';

export const QuestionsList = connect(Component,
    'stepCategoryState',
    'stepCategoryUseCase',
    'questionCategoryView'
);