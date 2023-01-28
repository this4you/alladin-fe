import styled from 'styled-components';
import { Button, TextField } from '@mui/material';

export const CreateTemplateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreateTemplateButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  margin-top: 7px;
`;

export const CreateTemplateInputButton = styled(Button)`
  &.MuiButtonBase-root {
    padding:0;
    text-transform: initial;
    height: 25px;
    color: ${({ theme }) => theme.text};
    border-radius: 15px;
    &.Mui-disabled {
      background-color: ${({ theme }) => theme.blockSecondary};
      color: ${({ theme }) => theme.secondaryText_200};
    }
  }
  
`;

export const TemplateNameField = styled(TextField)`
  ${({ theme }) => `
  width: 223px;
  & .MuiInputBase-root {
    height: 40px;
    margin-top: 15px;
    background-color: ${theme.blockSecondary};
    border-radius: 15px;
  }
  
  & label.Mui-focused {
    color: ${theme.secondaryText_100};
  }
  
  & label.Mui-error {
    color: ${theme.danger};
  }
  `},
`;