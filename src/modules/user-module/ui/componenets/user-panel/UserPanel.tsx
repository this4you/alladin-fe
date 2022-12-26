import React from 'react';
import { Avatar, UserPanelContainer } from './styles';
import { IoNotificationsOutline } from 'react-icons/io5';
import { state as userState } from 'modules/user-module/ui/state/userState';

export const UserPanel: React.FC = () => {
    return (
        <> {
            userState.userInfo && (
                <UserPanelContainer>
                    <IoNotificationsOutline/>
                    <Avatar>
                        <img width={35} alt="avatar" src={`https://avatars.dicebear.com/api/bottts/${userState.userInfo.id}.svg`}/>
                    </Avatar>
                </UserPanelContainer>
            )
        }
        </>
    );
}