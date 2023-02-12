import React from 'react';
import { FormWrapper, GoogleIcon } from './styles';
import googleIcon from 'commons/img/svg/google-icon.svg';
import { AuthButton, FormRow, FormTextField } from '../styles';
import { AppForm } from 'commons/components/form';
import { RiArrowRightSLine } from 'react-icons/ri';
import { LoginFormProps } from './types';
import { Navigate } from 'react-router-dom';

export const LoginForm: React.FC<LoginFormProps> = ({
        loginState,
        loginUseCase,
        loginFormValidator
}) => {

    if (loginState.showUserContent) {
        return  <Navigate to={'/'}/>
    }

    return (
        <FormWrapper>
            <AppForm submit={loginUseCase.login} formValidator={loginFormValidator}>
                <FormRow>
                    <FormTextField id="email" name="email" label="Email" variant="standard"/>
                </FormRow>
                <FormRow>
                    <FormTextField id="password" name="password" type="password" label="Password" variant="standard"/>
                </FormRow>
                <GoogleIcon src={googleIcon} alt="google icon"/>
                <AuthButton type="submit" variant="contained" loading={loginState.loading.is}>
                    <RiArrowRightSLine size={35}/>
                </AuthButton>
            </AppForm>
        </FormWrapper>
    )
}