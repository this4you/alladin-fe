import { PageContainer } from 'app/styles';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { CenterContent, Content, Header, LeftSide, Logo } from './styles';
import { Menu } from './components/menu';

export const MainPage: React.FC = () => {
    return (
        <PageContainer>
            <LeftSide>
                <Logo width={120}/>
                <Menu/>
                <div/>
            </LeftSide>
            <CenterContent>
                <Header/>
                <Content>
                    <Outlet/>
                </Content>
            </CenterContent>
        </PageContainer>
    )
}