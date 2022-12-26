import styled from 'styled-components';

export const UserPanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 253px;
  height: 80px;
  color: ${({ theme }) => theme.secondaryText};
  background-color: ${({ theme }) => theme.blockColor};
  border-radius: 0 0 20px 20px;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Notifications = styled.div``;
export const Settings = styled.div``;
export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #32BEA6;
  border-radius: 40px;
  width: 45px;
  height: 45px;
  margin-right: 15px;
`;