import {QuestionItem as Component} from './QuestionItem';
import { connect } from '../../../../config/interviewTemplateQuestionsContext';

export const QuestionItem = connect(
    Component,
    'questionUseCase'
);