
import styled from 'styled-components';
import { IconButton } from '@mui/material';

export const DeleteQuestionButton = styled(IconButton)`
  opacity: 0;
  
  &.MuiButtonBase-root {
    width: 45px;
    height: 45px;
    svg {
      color: ${({ theme }) => theme.secondaryText};
    }
  }
`;

export const QuestionItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 54px;
  background: ${({ theme }) => theme.blockSecondary};
  margin-top: 16px;
  border-radius: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  
  &:hover {
    ${DeleteQuestionButton} {
      opacity: 1;
    }
  }
`;

export const QuestionItemColor = styled.div`
  min-width: 20px;
  min-height: 20px;
  border-radius: 10px;
  background-color: #C9B6F1;
  margin-left: 20px;
  margin-right: 20px;
`;
