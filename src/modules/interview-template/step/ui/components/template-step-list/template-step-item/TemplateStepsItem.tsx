import { TemplateStepsItemProps } from './types';
import { DeleteStepButton, EditableLabelContainer, IndexContainer, TemplateStepsItemContainer } from './styles';
import { MdDeleteOutline } from 'react-icons/md';
import { EditableLabel } from 'commons/components/editable-label';
import { useCallback } from 'react';
import { InterviewTemplateStep } from '../../../../application/models/InterviewTemplateStep';
import { toSnakeCase } from 'commons/utils/cases';
import { useNavigate } from 'react-router-dom';

export const TemplateStepsItem: React.FC<TemplateStepsItemProps> = ({
    step,
    deleteTemplateStep,
    updateTemplateStep
}) => {
    const navigate = useNavigate();

    const onUpdateTemplateStepName = useCallback(async (name: string) => {
        const newItem: InterviewTemplateStep = {
            ...step,
            name: name
        };

        return await updateTemplateStep(newItem);
    }, [updateTemplateStep, step]);

    const onStepClick = useCallback((event: any) => {
        if (event.target !== event.currentTarget) {
            return;
        }

        navigate(`${toSnakeCase(step.name)}`, { relative: 'route', replace: true });

    }, [step, navigate]);

    return (
        <TemplateStepsItemContainer key={step.id} onClick={onStepClick}>
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