import styled from 'styled-components';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

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

export const StepCategoryNameContainer = styled(AccordionSummary)`
  span {
    line-height: 41px;
  }
  display: flex;
  align-items: center;
  
  .Mui-expanded {
    margin: 12px 0 !important;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;