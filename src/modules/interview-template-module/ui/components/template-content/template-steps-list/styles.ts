import styled from 'styled-components';
import { FlexMixin } from 'commons/styles/mixins';

export const TemplateStepsListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const TemplateStepsAddButtonContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const TemplateStepsItemsContainer = styled.div`
  overflow-y: inherit;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0 30px 30px;

  //TODO need to fix
  &::after {
    content: "";
    width: 202px;
    height: 132px;
  }
`;

export const TemplateStepsItemsEmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  olor: white;
  font-size: 25px;
  ${FlexMixin.center}
`;