import styled from 'styled-components';
import { Button, TextField } from '@mui/material';

export const AddNameButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 110px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NameField = styled(TextField)`
  ${({ theme }) => `
  width: 100%;
  & .MuiInputBase-root {
    height: 40px;
    margin-top: 15px;
    background-color: ${theme.blockSecondary};
    border-radius: 15px;
  }
  
  & label.Mui-focused {
    color: ${theme.secondaryText_100};
  }
  `},
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  margin-top: 7px;
`;

export const NameButton = styled(Button)`
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

