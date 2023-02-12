import React, { Suspense } from 'react'

import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import {
    BrowserRouter as Router,
} from 'react-router-dom';
import { lazily } from 'react-lazily';
import { AuthPage } from 'app/pages';
import { CreateCompanyContainer, LoginFormContainer } from 'modules/auth';
import { MainPage } from 'app/pages/main-page/MainPage';
import { UserContentProvider } from 'modules/user-module';

const { InterviewTemplateModule } = lazily(() => import('modules/interview-template'));

export const AppRoutes: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<UserContentProvider/>}>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<h1>Dashboard</h1>}/>
                    <Route path={'/dashboard'} element={<h1>Dashboard</h1>}/>
                    <Route path={'/templates'} element={
                        <Suspense fallback={<>Loading...</>}>
                            <InterviewTemplateModule/>
                        </Suspense>
                    }/>
                    <Route path={'/templates'} element={
                        <Suspense fallback={<>Loading...</>}>
                            <InterviewTemplateModule/>
                        </Suspense>
                    }>
                        <Route path={':templateId'}/>
                    </Route>
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