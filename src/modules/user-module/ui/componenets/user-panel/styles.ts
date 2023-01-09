import styled from 'styled-components';
import { Button } from '@mui/material';

export const MenuButton = styled(Button)`
  &.MuiButton-root {
    display: flex;
    border: 0;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 99px;
    height: 15px;
    position: absolute;
    margin-top: auto;
    margin-bottom: auto;
    top: 73px;
    bottom: 0;
    right: 19px;
    border-radius: 0 0 15px 15px;
    cursor: pointer; 
  }
  .MuiLoadingButton-loadingIndicator {
    color: ${({ theme }) => theme.text};
  }
`

export const UserPanelContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 140px;
  height: 65px;
  color: ${({ theme }) => theme.secondaryText};
  background-color: ${({ theme }) => theme.blockColor};
  border-radius: 0 0 20px 20px;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #32BEA6;
  border-radius: 40px;
  width: 45px;
  height: 45px;
`;