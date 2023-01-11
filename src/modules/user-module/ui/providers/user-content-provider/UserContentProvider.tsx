import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react';
import { userModuleFactory } from 'modules/user-module/config/userFactory';

export const PageLoader: React.FC = () => (<h1>Loading...</h1>); //TODO

const Provider: React.FC = () => {
    const { initUserInfoUseCase, authState } = userModuleFactory.get({ key: 'user-module' });

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
                authState.isAuth ? <Outlet/> : <Navigate to="/auth/login"/>
            }
        </>
    )
}

export const UserContentProvider = observer(Provider);