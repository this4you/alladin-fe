import { AddTemplateStepButtonProps } from './types';
import { AddTemplateStepButtonContainer } from './styles';
import { AddFieldButton } from 'commons/components';

export const AddTemplateStepButton: React.FC<AddTemplateStepButtonProps> = ({ createTemplateStep, templateId }) => {
    return (
        <AddTemplateStepButtonContainer>
            <AddFieldButton
                style={{ width: '300px' }}
                onCreate={(name) => createTemplateStep(templateId, name)}
                label={'Add template-list step'}
                inputPlaceholder={'What is name of step?'}/>
        </AddTemplateStepButtonContainer>
    );
}