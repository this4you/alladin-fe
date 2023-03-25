import styled from 'styled-components';
import { TextField } from '@mui/material';

export const QuestionCategoryModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.blockSecondary};
  border-radius: 20px;
  width: 936px;
  height: 614px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionCategoryModalHeader = styled.div`
  margin-top: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 42px;
  color: ${({ theme }) => theme.text};
`;

export const QuestionCategoryModalDescription = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.secondaryText};
  margin-top: 22px;
  width: 85%;
`;

export const QuestionCategories = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(202px, 1fr));
`;

export const QuestionCategoryLabel = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.blockSecondary};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  height: 60px;
  background: rgba(131, 131, 131, 1);
  margin-bottom: 20px;
  
  :hover {
    color: #faebd7;
    background-color: ${({ theme }) => theme.primary};;
  }
`;

export const QuestionCategorySearch = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  color: ${({ theme }) => theme.secondaryText};
  margin: 20px 0;
`;

export const QuestionCategorySearchIcon = styled.div`
  margin-right: 10px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 27px;
`;

export const SearchField = styled(TextField)`
  ${({ theme }) => `
  font-size: 10px;
  width: 100%;

  & .MuiInput-underline:after {
    border-bottom-color: ${theme.primary};
    border-width: 1px;
    border-radius: 20px;
  }
  
  & .MuiInputBase-root {
    font-size: 0.85rem;
    color: ${theme.secondaryText};
  }

  & .MuiInput-underline:before {
    border-bottom: 0px;
    border-width: 1px;
  }
  `},
`;
