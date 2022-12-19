import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ActiveCategory = styled.div`
  height: 100%;
  width: 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primary};
`;

export const MenuItemContent = styled(Link)`
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 36px;
    height: 36px;
  }
`;

export const MenuItemLabel = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
`;

export const MenuItemContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  color: ${({ theme, isActive }) => isActive ? theme.primary : theme.secondaryText} !important;

  ${ActiveCategory} {
    opacity: ${({ isActive }) => isActive ? 1 : 0};
  }
`;