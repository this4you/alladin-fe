import { TemplateStepItems as component } from './TemplateStepItems';
import { connect } from '../../../../config/interviewTemplateStepsContext';

export const TemplateStepItems = connect(component,
    'initTemplateStepsList',
    'updateTemplateStepPosition'
);