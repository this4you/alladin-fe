import { AddTemplateStepButtonProps } from './types';
import { AddTemplateStepButtonContainer } from './styles';
import { AddFieldButton } from 'commons/components';

export const AddTemplateStepButton: React.FC<AddTemplateStepButtonProps> = ({ createTemplateStep }) => {
    return (
        <AddTemplateStepButtonContainer>
            <AddFieldButton
                style={{ width: '300px' }}
                onCreate={createTemplateStep}
                label={'Add template-list step'}
                inputPlaceholder={'What is name of step?'}/>
        </AddTemplateStepButtonContainer>
    );
}