import styled from 'styled-components';

export const TemplateStepsListContainer = styled.div``;

export const TemplateStepsAddButtonContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const TemplateStepsItemsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0 30px 30px;

  &::after {
    content: "";
    width: 202px;
    height: 132px;
  }
`;