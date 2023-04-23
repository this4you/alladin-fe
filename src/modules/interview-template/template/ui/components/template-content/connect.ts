import { TemplateContent as component } from './TemplateContent';
import { connect } from '../../../config/interviewTemplateContext';

export const TemplateContent = connect(component, 'state');