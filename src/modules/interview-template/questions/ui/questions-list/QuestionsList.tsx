import { QuestionsListProps } from './types';
import { AddCategoryButton, QuestionListContainer, Questions } from './styles';
import { StepCategoryItem } from './step-category-item';
import { IoMdAddCircleOutline } from 'react-icons/io';
import React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { QuestionCategoryModal } from '../question-category-modal';

const questionsList = [
    {
        stepCategoryId: '1',
        categoryName: 'Git',
        position: 1,
        questions: [
            {
                id: '1',
                text: 'Question1',
                position: 1,
            },
            {
                id: '2',
                text: 'Question2',
                position: 2,
            }
        ]
    },
    {
        stepCategoryId: '2',
        categoryName: 'SQL',
        position: 2,
        questions: []
    },
    {
        stepCategoryId: '3',
        categoryName: 'React',
        position: 2,
        questions: []
    },
    {
        stepCategoryId: '4',
        categoryName: 'Redux',
        position: 2,
        questions: []
    },
    {
        stepCategoryId: '5',
        categoryName: 'Styled-components',
        position: 2,
        questions: []
    },
];
export const QuestionsList: React.FC<QuestionsListProps> = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <QuestionListContainer>
            <AddCategoryButton variant={'outlined'} startIcon={<IoMdAddCircleOutline/>} onClick={handleOpen}>
                Add new question category
            </AddCategoryButton>
            <Questions>
                {questionsList.map(it => <StepCategoryItem key={it.stepCategoryId} stepCategory={it}/>)}
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