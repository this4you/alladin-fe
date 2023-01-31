import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TemplateItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  width: 223px;
  height: 54px;
  background-color: ${({ theme }) => theme.blockSecondary};
  border-radius: 7px;
  margin-bottom: 13px;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.blockSecondary_200};
  }
`;

export const ActiveMarker = styled.div`
  display: none;
  background-color: ${({ theme }) => theme.primary};
  width: 6px;
  height: 54px;
  position: absolute;
  left: 0;
  border-radius: 0 20px 20px 0;
`;

export const TemplateLink = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
  &.active {
    ${ActiveMarker}{
      display: block; 
    }
  }
`
