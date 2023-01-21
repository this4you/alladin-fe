import styled from 'styled-components';
import { ContentBlock } from 'commons/components';
import { Button } from '@mui/material';

export const TemplatesListContainer = styled(ContentBlock)`
  display: flex;
  align-items: center;
  height: 100%;
  min-width: 260px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const AddTemplateButton = styled(Button)`
  &.MuiButton-root {
    width: 150px;
    height: 35px;
    margin-top: 10px;
    border-radius: 40px;
    cursor: pointer;
    text-transform: none;
  }
`;

export const AddTemplateContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 110px;
`;