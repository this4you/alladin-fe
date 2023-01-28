import styled from 'styled-components';

export const TemplateStepsItemContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 202px;
  margin-bottom: 30px;
  height: 132px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.blockSecondary};
  color: ${({ theme }) => theme.text};
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  :hover {
    background-color: ${({ theme }) => theme.primary_hover};
  }
`;

export const IndexContainer = styled.div`
  position: absolute;
  left: -10px;
  bottom: -10px;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.primary};
`;