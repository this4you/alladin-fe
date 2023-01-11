import React from 'react';
import { userModuleFactory } from 'modules/user-module/config/userFactory';
import { Provider } from 'modules/user-module/config/context';
import { UserPanel } from '../user-panel/';

export const UserPanelContainer: React.FC = () => {
    const context = userModuleFactory.get({ key: 'user-module' })

    return (
        <Provider moduleContext={context}>
           <UserPanel/>
        </Provider>
    )
}