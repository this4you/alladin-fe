import styled from 'styled-components';

export const TemplateStepsListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 30px;
  
  &::after {
    content: "";
    width: 202px;
    height: 132px;
  }
`;