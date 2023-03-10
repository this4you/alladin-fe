import styled from 'styled-components';

export const NoTemplates = styled.div`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.secondaryText};
  padding: 10px;
  font-size: 16px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TemplateItemsContainer = styled.div`
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  overflow-y: auto;
`;