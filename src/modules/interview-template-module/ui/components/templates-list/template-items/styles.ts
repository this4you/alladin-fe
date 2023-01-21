import styled from 'styled-components';

export const NoTemplates = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.secondaryText};
  padding: 10px;
  font-size: 16px;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TemplateItemsContainer = styled.div`
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; //TODO add global scroll bar
  }
`;