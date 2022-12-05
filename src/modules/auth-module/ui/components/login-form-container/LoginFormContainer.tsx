import React from 'react';
import { AuthButton, AuthContainer, AuthFooter, AuthHeader, AuthLink } from '../styles';
import { LoginFrom } from '../login-form';
import { RiArrowRightSLine } from 'react-icons/ri';
import { FromLeftAppearAnimation } from '../animations';

const LoginFormContainer: React.FC = () => {
    return (
        <FromLeftAppearAnimation>
            <AuthContainer>
                <AuthHeader>
                    <h2>Login</h2>
                </AuthHeader>
                <LoginFrom/>
                <AuthFooter>
                    <span>Do you want to add a company?</span>
                    <AuthLink to={'/create-company'}>Create company</AuthLink>
                </AuthFooter>
            </AuthContainer>
        </FromLeftAppearAnimation>
    )
}

export default LoginFormContainer;