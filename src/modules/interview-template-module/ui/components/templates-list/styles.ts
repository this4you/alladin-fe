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

export const NoTemplatesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoTemplates = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.secondaryText};
  padding: 10px;
  font-size: 16px;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddTemplateButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 110px;
`;