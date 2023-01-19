import { connect } from 'modules/interview-template-module/config/context';
import { CreateTemplateInput as component} from './CreateTemplateInput';

export const CreateTemplateInput = connect(
    component,
    'createTemplateUseCase'
)