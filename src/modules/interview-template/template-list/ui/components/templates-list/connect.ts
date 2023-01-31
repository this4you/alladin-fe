import { connect } from 'modules/interview-template/template-list/config/interviewTemplateContext';
import { TemplatesList as component} from './TemplatesList';

export const TemplatesList = connect(
    component,
    'createTemplate'
)