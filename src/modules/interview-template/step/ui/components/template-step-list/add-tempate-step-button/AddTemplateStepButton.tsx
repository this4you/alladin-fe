import { AddTemplateStepButtonProps } from './types';
import { AddTemplateStepButtonContainer } from './styles';
import { AddFieldButton } from 'commons/components';

export const AddTemplateStepButton: React.FC<AddTemplateStepButtonProps> = ({ createTemplateStep, templateId }) => {
    return (
        <AddTemplateStepButtonContainer>
            <AddFieldButton
                style={{ width: '300px' }}
                onCreate={(name:string) => createTemplateStep(templateId, name)}
                label={'Add template step'}
                inputPlaceholder={'What is name of step?'}/>
        </AddTemplateStepButtonContainer>
    );
}