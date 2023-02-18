import styled from 'styled-components';
import { ContentBlockHeader } from 'commons/components/content-block/styles';

export const TemplateHeaderContainer = styled(ContentBlockHeader)`
  font-weight: 400;
  font-size: 1rem;
  padding: 10px;
  justify-content: space-between;
`;

export const EditableLabelContainer = styled.div`
  margin-left: 12px;
  width: 100%;
`;

export const TemplateHeaderLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;