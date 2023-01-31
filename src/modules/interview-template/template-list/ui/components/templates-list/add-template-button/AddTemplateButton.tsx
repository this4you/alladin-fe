import { AddTemplateButtonProps } from './types';
import { AddTemplateButtonContainer } from './styles';
import { AddFieldButton } from 'commons/components';

export const AddTemplateButton: React.FC<AddTemplateButtonProps> = ({ createTemplate }) => {
    return (
        <AddTemplateButtonContainer>
            <AddFieldButton
                style={{ width: '220px' }}
                onCreate={createTemplate}
                label={'Add template-list'}
                inputPlaceholder={'What is template-list name?'}
            />
        </AddTemplateButtonContainer>
    );
}