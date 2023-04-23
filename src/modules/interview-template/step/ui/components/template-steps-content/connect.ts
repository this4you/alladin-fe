import {TemplateStepsContent as component} from './TemplateStepsContent';
import { connect } from '../../../config/interviewTemplateStepsContext';

export const TemplateStepsContent = connect(component, 'state');