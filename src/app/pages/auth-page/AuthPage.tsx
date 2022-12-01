import React from 'react';

import { AuthPageProps } from './types';
import { Logo, ContentContainer } from './styles';
import logo from 'commons/img/svg/logo.svg';
import { PageContainer } from 'app/components/PageContainer';
import { Outlet } from 'react-router-dom';

const AuthPage: React.FC<AuthPageProps> = () => {
    return (
        <PageContainer>
            <Outlet></Outlet>
            <ContentContainer>
                <Logo src={logo} alt="logo"/>
            </ContentContainer>
        </PageContainer>
    )
}

export default AuthPage;