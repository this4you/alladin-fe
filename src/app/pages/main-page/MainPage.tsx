import { PageContainer } from 'app/styles';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { CenterContent, Content, Header, LeftSide, Logo, UserPanelWrapper } from './styles';
import { Menu } from './components/menu';
import { UserPanelContainer } from 'modules/user-module';
import { GlobalSearch } from './components/global-search';

export const MainPage: React.FC = () => {
    return (
        <PageContainer>
            <LeftSide>
                <Logo width={120}/>
                <Menu/>
                <div/>
            </LeftSide>
            <CenterContent>
                <Header>
                    <div/>
                    <GlobalSearch/>
                    <UserPanelWrapper>
                        <UserPanelContainer/>
                    </UserPanelWrapper>
                </Header>
                <Content>
                    <Outlet/>
                </Content>
            </CenterContent>
        </PageContainer>
    )
}