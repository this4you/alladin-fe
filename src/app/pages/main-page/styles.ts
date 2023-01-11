import styled from 'styled-components';
import { Logo as BaseLogo } from 'commons/components/logo';
import { UserPanel } from 'modules/user-module/ui/componenets/user-panel';

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 152px;
  border-radius: 0 36px 36px 0;
  background-color: ${({ theme }) => theme.blockColor};
`;

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`;

export const UserPanelWrapper = styled.div`
    margin-right: 10px;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(BaseLogo)`
  margin-top: 15px;
`;

