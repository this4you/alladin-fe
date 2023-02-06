import {TemplateStepsItem as component} from './TemplateStepsItem';
import { connect } from '../../../../config/interviewTemplateStepsContext';

export const TemplateStepsItem = connect(component, 'deleteTemplateStep');