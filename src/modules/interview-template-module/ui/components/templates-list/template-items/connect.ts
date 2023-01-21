import { TemplateItems as Component } from './TemplateItems';
import { connect } from '../../../../config/context';

export const TemplateItems = connect(Component, 'initTemplatesList');