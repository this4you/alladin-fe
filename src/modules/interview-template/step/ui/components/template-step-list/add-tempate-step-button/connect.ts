import { AddTemplateStepButton as component } from './AddTemplateStepButton';
import { connect } from '../../../../config/interviewTemplateStepsContext';

export const AddTemplateStepButton = connect(component, 'createTemplateStep');