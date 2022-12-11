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
import { CreateCompanyContainer, LoginFormContainer, AuthContentProvider } from 'modules/auth-module';

export const AppRoutes: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<AuthContent/>}/>
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

const AuthContent: React.FC = () => {
    return (
        <div>
            <h1>Auth content</h1>
        </div>
    );
}

//const AuthContentProvider