import { TemplateItems as Component } from './TemplateItems';
import { connect } from '../../../../config/interviewTemplateContext';

export const TemplateItems = connect(Component, 'initTemplatesList', 'setActiveTemplateItem', 'state');