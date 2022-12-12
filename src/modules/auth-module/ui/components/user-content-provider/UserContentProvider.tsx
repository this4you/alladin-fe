import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authModuleFactory } from '../../../config/authFactory';
import { observer } from 'mobx-react';

export const PageLoader: React.FC = () => (<h1>Loading...</h1>);

//TODO NEED REFACTORING
const Provider: React.FC = () => {
    const { initUserInfoUseCase, userState } = authModuleFactory.get({
        key: 'auth-module'
    });

    const [processLoading, setProcessLoading] = useState(true);

    useEffect(() => {
        initUserInfoUseCase.init().then(() => {
            setProcessLoading(false)
        });
    }, [])

    if (processLoading) {
        return <PageLoader/>
    }

    return (
        <>
            {
                userState.userId ? <Outlet/> : <Navigate to="/auth/login"/>
            }
        </>
    )
}

export const UserContentProvider = observer(Provider);