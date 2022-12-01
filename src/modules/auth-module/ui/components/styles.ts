import styled from 'styled-components';

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
export const AuthButton = styled.div`
  display: flex;
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
  font-size: 14px;
  line-height: 17px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${({ theme }) => theme.text};
  a {
    color: ${({ theme }) => theme.primary};
  }
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