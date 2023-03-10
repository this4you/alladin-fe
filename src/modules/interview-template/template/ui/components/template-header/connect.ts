import { TemplateHeader as Component } from './TemplateHeader';
import { connect } from '../../../config/interviewTemplateContext';

export const TemplateHeader = connect(Component,
    'deleteTemplate',
    'updateTemplate',
    'state'
);