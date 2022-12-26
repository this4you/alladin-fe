import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react';
import { userModuleFactory } from 'modules/user-module/config/userFactory';
import { state as userState } from 'modules/user-module/ui/state/userState';

export const PageLoader: React.FC = () => (<h1>Loading...</h1>); //TODO

const Provider: React.FC = () => {
    const { initUserInfoUseCase } = userModuleFactory.get({ key: 'user-module' });

    const [processLoading, setProcessLoading] = useState(true);

    useEffect(() => {
        initUserInfoUseCase().then(() => {
            setProcessLoading(false)
        });
    }, [])

    if (processLoading) {
        return <PageLoader/>
    }

    return (
        <>
            {
                userState.userInfo ? <Outlet/> : <Navigate to="/auth/login"/>
            }
        </>
    )
}

export const UserContentProvider = observer(Provider);