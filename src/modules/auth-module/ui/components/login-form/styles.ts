import styled from 'styled-components';
import { TextField } from '@mui/material';

export const FormWrapper = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
`;

export const FormTextField = styled(TextField)`
  ${({ theme }) => `
  width: 100%;
  & label.Mui-focused {
    color: ${theme.secondaryText_100};
  }
  

  & .MuiInput-underline:after {
    border-bottom-color: ${theme.secondaryText_100};
    border-width: 3px;
    border-radius: 20px;
  }

  & .MuiInput-underline:before {
    border-bottom-color: ${theme.secondaryText};
    border-width: 3px;
  }
  `},
`;

export const FormRow = styled.div`
  margin-top: 20px;
  width: 60%;
`;

export const GoogleIcon = styled.img`
  width: 70px;
  height: 70px;
  margin-top: 50px;
`;