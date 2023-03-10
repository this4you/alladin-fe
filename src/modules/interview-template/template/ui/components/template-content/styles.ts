import styled from 'styled-components';
import { ContentBlockContainer } from 'commons/components/content-block/styles';
import { FlexMixin } from '../../../../../../commons/styles/mixins';

export const TemplateContentContainer = styled(ContentBlockContainer)`
  width: 100%;
  margin-right: 10px;
`;

export const SelectInterviewStepLabel = styled.div`
  color: ${({ theme }) => theme.text};
  height: 100%;
  width: 100%;
  
  ${FlexMixin.center}
`