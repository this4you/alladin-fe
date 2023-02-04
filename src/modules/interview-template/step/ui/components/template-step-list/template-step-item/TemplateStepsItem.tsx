import { TemplateStepsItemProps } from './types';
import { DeleteStepButton, IndexContainer, TemplateStepsItemContainer } from './styles';
import { MdDeleteOutline } from 'react-icons/md';

export const TemplateStepsItem: React.FC<TemplateStepsItemProps> = ({ step }) => {
    return (
        <TemplateStepsItemContainer key={step.id}>
            {step.name}
            <IndexContainer>{step.position}</IndexContainer>
            <DeleteStepButton aria-label="delete" color={'primary'} size="large" onClick={() => {}}>
                <MdDeleteOutline/>
            </DeleteStepButton>
        </TemplateStepsItemContainer>
    );
}