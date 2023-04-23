import styled from 'styled-components';
import { Accordion, AccordionDetails, AccordionSummary, IconButton } from '@mui/material';
import { AddFieldButton } from '../../../../../../../commons/components';

export const StepCategoryItemContainer = styled(Accordion)`
  &.MuiAccordion-root {
    background-color: transparent;
    box-shadow: none;
  }
  
  &.MuiAccordion-root::before {
    background-color: ${({ theme }) => theme.blockSecondary} !important;
  }

  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: ${({ theme }) => theme.text};

  svg {
    color: ${({ theme }) => theme.text};
  }
`;

export const DeleteStepCategoryButton = styled(IconButton)`
  opacity: 0;
  
  &.MuiButtonBase-root {
    width: 45px;
    height: 45px;
    svg {
      color: ${({ theme }) => theme.secondaryText};
    }
  }
`;

export const StepCategoryNameContainer = styled(AccordionSummary)`
  .MuiAccordionSummary-content {
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    align-items: center;  
  }
  
  .Mui-expanded {
    margin: 12px 0 !important;
  }
  
  :hover {
    ${DeleteStepCategoryButton} {
      opacity: 1;
    }
  }
`;

export const StepCategoryColor = styled.div`
  width: 12px;
  height: 44px;
  background-color: #C9B6F1;
  border-radius: 5px;
  margin-right: 11px;
`;

export const QuestionsList = styled(AccordionDetails)`
  &.MuiAccordionDetails-root {
    padding: 0 0 5px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AddQuestionButtonContainer = styled.div`
  width: 85%;
`;

export const AddQuestionButton = styled(AddFieldButton)`
  width: 85%;
  min-height: 0px;
  margin-top: 15px;
  
  & .MuiButton-root {
    svg {
      color: ${({ theme }) => theme.primary};
    }
  } 
  
  & .MuiInputBase-root {
    margin-top: 0px;
  }
`;