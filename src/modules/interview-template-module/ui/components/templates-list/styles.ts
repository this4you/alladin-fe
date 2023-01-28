import styled from 'styled-components';
import { ContentBlock } from 'commons/components';
import { Button, TextField } from '@mui/material';

export const TemplatesListContainer = styled(ContentBlock)`
  display: flex;
  align-items: center;
  height: 100%;
  min-width: 260px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const AddTemplateButton = styled(Button)`
  &.MuiButton-root {
    width: 150px;
    height: 35px;
    border-radius: 40px;
    cursor: pointer;
    text-transform: none;
  }
`;

export const ConfigContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
`;

export const AddButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 260px;
`;

export const SearchField = styled(TextField)`
  ${({ theme }) => `
  font-size: 10px;

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
    border-bottom-color: ${theme.secondaryText};
    border-width: 1px;
  }
  `},

  
`;