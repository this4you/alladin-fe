import { TemplateStepsItemProps } from './types';
import { DeleteStepButton, EditableLabelContainer, IndexContainer, TemplateStepsItemContainer } from './styles';
import { MdDeleteOutline } from 'react-icons/md';
import { EditableLabel } from 'commons/components/editable-label';
import { useCallback } from 'react';
import { InterviewTemplateStep } from '../../../../application/models/InterviewTemplateStep';

export const TemplateStepsItem: React.FC<TemplateStepsItemProps> = ({
    step,
    deleteTemplateStep,
    updateTemplateStep
}) => {
    const onUpdateTemplateStepName = useCallback(async (name: string) => {
        const newItem: InterviewTemplateStep = {
            ...step,
            name: name
        };

        return await updateTemplateStep(newItem);
    }, [updateTemplateStep, step]);

    return (
        <TemplateStepsItemContainer key={step.id} onClick={() => {console.log("CLICKED")}}>
            <EditableLabelContainer>
                <EditableLabel label={step.name} labelChanged={onUpdateTemplateStepName}/>
            </EditableLabelContainer>
            <IndexContainer>{step.position}</IndexContainer>
            <DeleteStepButton aria-label="delete" color={'primary'} size="large"
                              onClick={() => deleteTemplateStep(step.id)}>
                <MdDeleteOutline/>
            </DeleteStepButton>
        </TemplateStepsItemContainer>
    );
}