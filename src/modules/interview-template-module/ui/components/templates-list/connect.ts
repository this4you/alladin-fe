import { connect } from 'modules/interview-template-module/config/context';
import { TemplatesList as component} from './TemplatesList';

export const TemplatesList = connect(
    component,
    'createTemplate'
)