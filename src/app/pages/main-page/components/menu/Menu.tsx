import React, { useEffect, useState } from 'react';
import { RiDashboardLine } from 'react-icons/ri';
import { AiOutlineContacts, AiOutlineSchedule, AiOutlineVideoCamera } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { MenuItem } from '../menu-item';
import { MenuContainer } from './styles';
import { useLocation } from 'react-router-dom';

const menuItems = [
    {
        name: 'Dashboard',
        icon: <RiDashboardLine/>,
        url: '/dashboard'
    },
    {
        name: 'Templates',
        icon: <AiOutlineVideoCamera/>,
        url: '/templates'
    },
    {
        name: 'Positions',
        icon: <AiOutlineContacts/>,
        url: '/positions'
    },
    {
        name: 'Candidates',
        icon: <BiUser/>,
        url: '/candidates'
    },
    {
        name: 'Schedule',
        icon: <AiOutlineSchedule/>,
        url: '/schedule'
    },
];

export const Menu: React.FC = () => {
    let location = useLocation();
    const [activeCategory, setActiveCategory] = useState('/dashboard');

    useEffect(() => {
        setActiveCategory(location.pathname === '/' ? '/dashboard' : location.pathname);
    }, [location])

    return (
        <MenuContainer>
            {
                menuItems.map(item => {
                    return (
                        <MenuItem key={item.name} {...item} isActive={item.url === activeCategory}/>
                    )
                })
            }
        </MenuContainer>
    );
}
