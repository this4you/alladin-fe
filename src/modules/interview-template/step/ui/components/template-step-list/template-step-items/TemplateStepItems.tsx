import { TemplateStepItemsProps } from './types';
import { interviewTemplateStepsState, stepsList } from '../../../state/interviewTemplateStepsState';
import { TemplateStepsItem } from '../template-step-item';
import { useEffect } from 'react';
import { TemplateStepsItemsContainer, TemplateStepsItemsEmptyContainer } from './styles';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

export const TemplateStepItems: React.FC<TemplateStepItemsProps> = ({
    initTemplateStepsList,
    updateTemplateStepPosition,
    templateId
}) => {

    useEffect(() => {
        initTemplateStepsList(templateId);
    }, [templateId]);

    const onUpdatePosition = (dropResult: DropResult) => {
        if (!dropResult.destination) {
            return;
        }

        updateTemplateStepPosition(
            dropResult.draggableId,
            dropResult.destination.index + 1
        );
    }

    return (
        <>
            {
                stepsList.get().length > 0 ?
                    (
                        <DragDropContext onDragEnd={onUpdatePosition}>
                            <Droppable droppableId="to-dos">
                                {(provided) => (
                                    <TemplateStepsItemsContainer {...provided.droppableProps} ref={provided.innerRef}>
                                        {stepsList.get().map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id.toString()}
                                                index={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <div
                                                        {...provided.draggableProps}
                                                        ref={provided.innerRef}
                                                        {...provided.dragHandleProps}
                                                        key={item.id}
                                                        className={
                                                            snapshot.isDragging ? 'selected' : 'not-selected'
                                                        }
                                                    >
                                                        <TemplateStepsItem key={item.id} step={item}/>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </TemplateStepsItemsContainer>
                                )}
                            </Droppable>
                        </DragDropContext>)
                    :
                    (<TemplateStepsItemsEmptyContainer>
                        Add new step...
                    </TemplateStepsItemsEmptyContainer>)
            }
        </>
    )
}