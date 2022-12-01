import React from 'react';
import { FormRow, FormTextField, FormWrapper, GoogleIcon } from './styles';
import googleIcon from 'commons/img/svg/google-icon.svg';

const LoginForm: React.FC = () => {
    return (
        <FormWrapper>
            <FormRow>
                <FormTextField id="email" label="Email" variant="standard"/>
            </FormRow>
            <FormRow>
                <FormTextField id="password" type="password" label="Password" variant="standard"/>
            </FormRow>
            <GoogleIcon src={googleIcon} alt="google icon"/>
        </FormWrapper>
    )
}

export default LoginForm;