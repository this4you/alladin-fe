import styled from 'styled-components';
import { ContentBlockContainer, ContentBlockHeader } from 'commons/components/content-block/styles';
import { Button } from '@mui/material';

export const TemplateContentContainer = styled(ContentBlockContainer)`
  width: 100%;
  margin-right: 10px;
`;

export const TemplateContentHeader = styled(ContentBlockHeader)`
    padding: 20px;
    justify-content: space-between;
`;

export const DeleteTemplateButton = styled(Button)`
  &.MuiButton-root {
    width: 85px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
    text-transform: none;
  }
`;