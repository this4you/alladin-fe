import styled from 'styled-components';
import { AddButton } from 'commons/components/add-button';

export const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  overflow: hidden;
`;

export const Questions = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

export const AddCategoryButton = styled(AddButton)`
  &.MuiButton-root {
    width: 300px; 
  }
`;