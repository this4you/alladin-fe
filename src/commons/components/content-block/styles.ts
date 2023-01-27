import styled from 'styled-components';

export const ContentBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.blockColor};
  min-height: 50px;
  border-radius: 20px;
`;

export const ContentBlockHeader = styled.div`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.blockSecondary};
  display: flex;
  max-height: 50px;
  min-height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  border-radius: 20px 20px 0 0;
`;