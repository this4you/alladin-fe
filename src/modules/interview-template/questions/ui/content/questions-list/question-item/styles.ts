
import styled from 'styled-components';

export const QuestionItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 54px;
  background: ${({ theme }) => theme.blockSecondary};
  margin-top: 16px;
  border-radius: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

export const QuestionItemColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #C9B6F1;
  margin-left: 20px;
  margin-right: 20px;
`;
