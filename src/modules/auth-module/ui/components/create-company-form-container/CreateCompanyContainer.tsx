import React from 'react';
import { AuthButton, AuthContainer, AuthFooter, AuthHeader } from '../styles';
import { LoginFrom } from '../login-form';
import { RiArrowRightSLine } from 'react-icons/ri';

const CreateCompanyContainer: React.FC = () => {
    return (
        <AuthContainer>
            <AuthHeader>
                <h2>Create company</h2>
            </AuthHeader>
            <LoginFrom/>
            <AuthFooter>
                <span>Do you have an account?</span>
                <a href="#">Login</a>
            </AuthFooter>
            <AuthButton>
                <RiArrowRightSLine size={35}/>
            </AuthButton>
        </AuthContainer>
    )
}

export default CreateCompanyContainer;