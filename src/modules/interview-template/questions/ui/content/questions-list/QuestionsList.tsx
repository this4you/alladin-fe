import { QuestionsListProps } from './types';
import { AddCategoryButton, QuestionListContainer, Questions } from './styles';
import { StepCategoryItem } from './step-category-item';
import { IoMdAddCircleOutline } from 'react-icons/io';
import React, { useEffect } from 'react';
import { Modal } from '@mui/material';
import { QuestionCategoryModal } from '../question-category-modal';

export const QuestionsList: React.FC<QuestionsListProps> = ({stepCategoryState, stepCategoryUseCase}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        stepCategoryUseCase.initStepCategories();
    }, []);

    return (
        <QuestionListContainer>
            <AddCategoryButton variant={'outlined'} startIcon={<IoMdAddCircleOutline/>} onClick={handleOpen}>
                Add new question category
            </AddCategoryButton>
            <Questions>
                {stepCategoryState.categories.map(it => <StepCategoryItem key={it.stepCategoryId} stepCategory={it}/>)}
            </Questions>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <QuestionCategoryModal/>
            </Modal>
        </QuestionListContainer>
    );
}