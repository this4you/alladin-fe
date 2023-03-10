import { TemplateItem as component} from './TemplateItem';
import { connect } from '../../../../config/interviewTemplateContext';

export const TemplateItem = connect(component, 'state', 'setActiveTemplateItem');