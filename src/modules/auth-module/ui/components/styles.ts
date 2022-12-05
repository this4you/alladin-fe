import styled from 'styled-components';
import { FormTextField as TextInput } from 'commons/components/form';
import { Link } from 'react-router-dom';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  min-width: 500px;
  height: 100%;
  border-radius: 0 80px 80px 0;
  position: relative;
  background-color: ${({ theme }) => theme.blockColor};
`;

//TODO move to separate component
export const AuthButton = styled.button`
  display: flex;
  border: 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};

  &:hover {
    background-color: ${({ theme }) => theme.primary_hover};
  }

  width: 55px;
  height: 80%;
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  right: -55px;
  border-radius: 0 80px 80px 0;
  cursor: pointer;
`

export const AuthFooter = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;

export const AuthHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.secondaryText};
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
  }
`;

export const FormTextField = styled(TextInput)`
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

export const AuthLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
`;