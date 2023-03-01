import styled from 'styled-components';
import { TextField } from '@mui/material';

export const LabelContainer = styled.div`
    cursor: text;
    width: 100%;
`;

export const EditFieldContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const EditField = styled(TextField)`
  &.MuiFormControl-root {
    width: 100%;
  }

  & .MuiInputBase-root {
    height: 33px;
    border-radius: 13px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  bottom: -23px;
  width: 44px;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primary_hover};
  }
`;