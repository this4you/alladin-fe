import styled from 'styled-components';

export const TemplateItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  width: 223px;
  height: 54px;
  background-color: ${({ theme }) => theme.blockSecondary};
  border-radius: 7px;
  margin-top: 13px;
`;
