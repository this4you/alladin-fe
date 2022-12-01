import React from 'react';
import {
    Routes,
    Route,
    Navigate,
    useParams
} from 'react-router-dom';

import {
    BrowserRouter as Router,
} from 'react-router-dom';
import { AuthPage } from 'app/pages';
import { CreateCompanyContainer, LoginFormContainer } from 'modules/auth-module';

export const AppRoutes: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<AuthPage/>}>
                <Route index element={<LoginFormContainer/>}/>
                <Route path="login" element={<LoginFormContainer/>}/>
                <Route path="create-company" element={<CreateCompanyContainer/>}/>
                <Route path="*" element={<Navigate to="/login" replace/>}/>
            </Route>
        </Routes>
    </Router>
)