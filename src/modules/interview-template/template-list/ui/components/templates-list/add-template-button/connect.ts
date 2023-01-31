import { connect } from 'modules/interview-template/template-list/config/interviewTemplateContext';
import { AddTemplateButton as component} from './AddTemplateButton';

export const AddTemplateButton = connect(
    component,
    'createTemplate'
)