import { QuestionCategoryModal as Component } from './QuestionCategoryModal';
import { connect } from '../../../config/interviewTemplateQuestionsContext';

export const QuestionCategoryModal = connect(
    Component,
    'questionCategoryUseCase',
    'questionCategoryState',
    'questionCategoryView'
);
