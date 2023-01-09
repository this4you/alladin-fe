import React, { useState } from 'react';
import { Avatar, MenuButton, UserMenu, UserMenuItem, UserPanelContent, UserPanelWrapper } from './styles';
import { IoNotificationsOutline } from 'react-icons/io5';
import { state as userState } from 'modules/user-module/ui/state/userState';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { RiSettings2Line } from 'react-icons/ri';
import { IoMdLogOut } from 'react-icons/io';
import { IconButton } from '@mui/material';

export const UserPanel: React.FC = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <> {
            userState.userInfo && (
                <UserPanelWrapper>
                    <UserPanelContent>
                        <IoNotificationsOutline/>
                        <Avatar>
                            <img width={35} alt="avatar"
                                 src={`https://avatars.dicebear.com/api/bottts/${userState.userInfo.id}.svg`}/>
                        </Avatar>
                    </UserPanelContent>
                    <UserMenu style={{
                        display: openMenu ? 'block' : 'none',
                        marginTop: openMenu ? '-20px' : '0px'
                    }}>
                        <UserMenuItem style={{ marginTop: '25px' }}>
                            <IconButton>
                                <RiSettings2Line/>
                            </IconButton>
                        </UserMenuItem>
                        <UserMenuItem>
                            <IconButton>
                                <IoMdLogOut/>
                            </IconButton>
                        </UserMenuItem>
                    </UserMenu>
                    <MenuButton variant={'contained'} style={{
                        top: openMenu ? '155px' : '65px'
                    }} onClick={() => setOpenMenu(!openMenu)}>
                        {openMenu ? <MdOutlineKeyboardArrowUp/> : <MdOutlineKeyboardArrowDown/>}
                    </MenuButton>
                </UserPanelWrapper>
            )
        }
        </>
    );
}