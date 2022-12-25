import React from 'react';

import { AuthPageProps } from './types';
import {ContentContainer } from './styles';
import { Outlet } from 'react-router-dom';
import { PageContainer } from 'app/styles';
import { Logo } from 'commons/components/logo';

export const AuthPage: React.FC<AuthPageProps> = () => {
    return (
        <PageContainer>
            <Outlet></Outlet>
            <ContentContainer>
                <Logo width={350} />
            </ContentContainer>
        </PageContainer>
    )
}