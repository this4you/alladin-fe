import React from 'react';

import { AuthPageProps } from './types';
import { Logo, ContentContainer } from './styles';
import logo from 'commons/svg/logo.svg';
import { PageContainer } from 'app/components/PageContainer';
import { LoginFormContainer } from 'modules/auth-module';

const AuthPage: React.FC<AuthPageProps> = () => {
    return (
        <PageContainer>
            <LoginFormContainer/>
            <ContentContainer>
                <Logo src={logo} alt="logo"/>
            </ContentContainer>
        </PageContainer>
    )
}

export default AuthPage;