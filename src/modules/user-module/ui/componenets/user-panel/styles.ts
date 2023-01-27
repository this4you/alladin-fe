import styled from 'styled-components';
import { Button } from '@mui/material';

export const MenuButton = styled(Button)`
  &.MuiButton-root {
    position: absolute;
    display: flex;
    border: 0;
    justify-content: center;
    align-items: center;
    width: 99px;
    height: 15px;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 0 0 15px 15px;
    cursor: pointer;
  }

  .MuiLoadingButton-loadingIndicator {
    color: ${({ theme }) => theme.text};
  }
`;

export const UserMenuItem = styled.div`
  :hover {
    color: ${({ theme }) => theme.secondaryText_100};  
  }
  
  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.secondaryText};
  }
  
  display: flex;
  width: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

export const UserMenu = styled.div`
  width: 140px;
  height: 110px;
  position: absolute;
  top: 65px;
  background-color: #303137;
  border-radius: 0 0 20px 20px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.primary};
  z-index: 3;
`;

export const UserPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const UserPanelContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 140px;
  height: 65px;
  z-index: 4;
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