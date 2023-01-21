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
    display: flex;
    border: 0;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 15px;
    border-radius: 0 0 15px 15px;
    cursor: pointer;
  }

  .MuiLoadingButton-loadingIndicator {
    color: ${({ theme }) => theme.text};
  }
`;

export const AddTemplateContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 110px;
`;