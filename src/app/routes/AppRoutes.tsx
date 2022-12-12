import React from 'react';
import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import {
    BrowserRouter as Router,
} from 'react-router-dom';
import { AuthPage } from 'app/pages';
import { CreateCompanyContainer, LoginFormContainer, UserContentProvider } from 'modules/auth-module';

export const AppRoutes: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<UserContentProvider/>}>
                <Route index element={<h1>User auth content</h1>}/>
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