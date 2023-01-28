import styled from 'styled-components';
import { TextField } from '@mui/material';

export const GlobalSearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 32px;
  align-items: center;
  width: 575px;
  height: 65px;
  z-index: 4;
  color: ${({ theme }) => theme.secondaryText};
  background-color: ${({ theme }) => theme.blockColor};
  border-radius: 0 0 20px 20px;
`;

export const SearchField = styled(TextField)`
  ${({ theme }) => `
  font-size: 10px;
  width: 85%;

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

export const SearchIconContainer = styled.div`
  margin-right: 10px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 27px;
`