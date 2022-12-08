import React, { useEffect } from 'react';
import { AuthContainer, AuthFooter, AuthHeader, AuthLink } from '../styles';
import { FromLeftAppearAnimation } from '../animations';
import { Provider } from 'modules/auth-module/config/context';
import { authModuleFactory } from 'modules/auth-module/config/authFactory';
import {LoginForm} from '../login-form';

const LoginFormContainer: React.FC = () => {
    const context = authModuleFactory.get({
        key: "auth-module"
    });

    useEffect(() => (): void => {
        authModuleFactory.clear();
    });

    return (
        <Provider moduleContext={context}>
            <FromLeftAppearAnimation>
                <AuthContainer>
                    <AuthHeader>
                        <h2>Login</h2>
                    </AuthHeader>
                    <LoginForm/>
                    <AuthFooter>
                        <span>Do you want to add a company?</span>
                        <AuthLink to={'/create-company'}>Create company</AuthLink>
                    </AuthFooter>
                </AuthContainer>
            </FromLeftAppearAnimation>
        </Provider>
    )
}

export default LoginFormContainer;