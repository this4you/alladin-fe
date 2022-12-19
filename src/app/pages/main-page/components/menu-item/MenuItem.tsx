import React from 'react';
import { MenuItemProps } from './types';
import { ActiveCategory, MenuItemContainer, MenuItemContent, MenuItemLabel } from './styles';

export const MenuItem: React.FC<MenuItemProps> = ({ name, url, icon, isActive }) => {
    return (
        <MenuItemContainer isActive={isActive}>
            <ActiveCategory/>
            <MenuItemContent to={url}>
                {icon}
                <MenuItemLabel>{name}</MenuItemLabel>
            </MenuItemContent>
        </MenuItemContainer>
    );
}