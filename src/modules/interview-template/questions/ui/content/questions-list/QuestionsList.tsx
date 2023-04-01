import { QuestionsListProps } from './types';
import { AddCategoryButton, QuestionListContainer, Questions } from './styles';
import { StepCategoryItem } from './step-category-item';
import { IoMdAddCircleOutline } from 'react-icons/io';
import React, { useEffect } from 'react';
import { QuestionCategoryModal } from '../question-category-modal';

export const QuestionsList: React.FC<QuestionsListProps> = ({
    stepCategoryState,
    stepCategoryUseCase,
    questionCategoryView
}) => {

    useEffect(() => {
        stepCategoryUseCase.initStepCategories();
    }, []);

    return (
        <QuestionListContainer>
            <AddCategoryButton variant={'outlined'} startIcon={<IoMdAddCircleOutline/>}
                               onClick={questionCategoryView.openModal}>
                Add new question category
            </AddCategoryButton>
            <Questions>
                {
                    stepCategoryState.categories.map(it =>
                        <StepCategoryItem key={it.stepCategoryId} stepCategory={it}/>
                    )
                }
            </Questions>
            <QuestionCategoryModal/>
        </QuestionListContainer>
    );
}