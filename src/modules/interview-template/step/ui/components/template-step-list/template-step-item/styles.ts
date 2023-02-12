import styled from 'styled-components';
import { IconButton } from '@mui/material';

export const DeleteStepButton = styled(IconButton)`
  opacity: 0;

  &.MuiButtonBase-root {
    width: 45px;
    height: 45px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;


export const TemplateStepsItemContainer = styled.div`
  position: relative;
  cursor: pointer;
  height: 132px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.blockSecondary};
  color: ${({ theme }) => theme.text};
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${({ theme }) => theme.blockSecondary_200};

    ${DeleteStepButton} {
      opacity: 1;
    }
  }
`;


export const IndexContainer = styled.div`
  position: absolute;
  left: -10px;
  bottom: -10px;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.primary};
`;

export const EditableLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;