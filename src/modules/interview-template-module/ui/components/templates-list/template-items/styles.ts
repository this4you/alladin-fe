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
  overflow-y: auto;
  scrollbar-gutter: auto;
  padding-left: 10px;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #3c3d44;
    border-radius: 10px;
  }
`;