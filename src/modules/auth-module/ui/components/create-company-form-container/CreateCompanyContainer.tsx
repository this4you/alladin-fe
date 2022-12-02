import React from 'react';
import { AuthButton, AuthContainer, AuthFooter, AuthHeader, AuthLink } from '../styles';
import { RiArrowRightSLine } from 'react-icons/ri';
import CreateCompanyForm from '../create-company-form/CreateCompanyForm';

const CreateCompanyContainer: React.FC = () => {
    return (
        <AuthContainer>
            <AuthHeader>
                <h2>Create company</h2>
            </AuthHeader>
            <CreateCompanyForm/>
            <AuthFooter>
                <span>Do you have an account?</span>
                <AuthLink to={'/login'}>Login</AuthLink>
            </AuthFooter>
            <AuthButton>
                <RiArrowRightSLine size={35}/>
            </AuthButton>
        </AuthContainer>
    )
}

export default CreateCompanyContainer;