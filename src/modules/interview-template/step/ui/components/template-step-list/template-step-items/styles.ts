import styled from 'styled-components';
import { FlexMixin } from 'commons/styles/mixins';

export const TemplateStepsItemsContainer = styled.div`
  overflow-y: inherit;
  padding: 0 30px 30px;
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap:20px;
  grid-template-columns: repeat(auto-fill, minmax(202px, 1fr));
`;

export const TemplateStepsItemsEmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.text};
  ${FlexMixin.center}
`;