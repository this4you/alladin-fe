import React, { useEffect } from 'react';
import { Navigate, redirect } from 'react-router-dom';
import { AuthContentProviderProps } from './types';

export const PageLoader: React.FC = () => (<h1>Loading...</h1>);

export const AuthContentProvider: React.FC<AuthContentProviderProps> = (
    {
        initUserInfoUseCase,
        authState,
        children,
    }
) => {
    useEffect(() => {
        debugger
        initUserInfoUseCase.init();
    }, [])

    return (
        <>
            {
                authState.isAuth === true ? children
                    : authState.isAuth === false ? <Navigate to="/auth/login"/>
                        : <PageLoader/>
            }
        </>
    )
}

//TODO ADD REDIRECT TO AUTH_PAGE