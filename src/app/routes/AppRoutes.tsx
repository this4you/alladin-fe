import React from 'react';
import {
    Routes,
    Route,
    Navigate, Outlet
} from 'react-router-dom';

import {
    BrowserRouter as Router,
} from 'react-router-dom';
import { AuthPage } from 'app/pages';
import { CreateCompanyContainer, LoginFormContainer, UserContentProvider } from 'modules/auth-module';


const MainPage = () => {
    return (
        <>
            <h1>MAIN PAGE</h1>
            <Outlet></Outlet>
        </>
    )
}

export const AppRoutes: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/"  element={<UserContentProvider/>}>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<h1>Dashboard</h1>}/>
                    <Route path={'/dashboard'} element={<h1>Dashboard</h1>}/>
                    <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
                </Route>
            </Route>
            <Route path="/auth" element={<AuthPage/>}>
                <Route index element={<LoginFormContainer/>}/>
                <Route path="login" element={<LoginFormContainer/>}/>
                <Route path="create-company" element={<CreateCompanyContainer/>}/>
                <Route path="*" element={<Navigate to="/login" replace/>}/>
            </Route>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    </Router>
)