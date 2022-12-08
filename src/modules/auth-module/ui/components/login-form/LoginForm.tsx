import React from 'react';
import { FormWrapper, GoogleIcon } from './styles';
import googleIcon from 'commons/img/svg/google-icon.svg';
import { AuthButton, FormRow, FormTextField } from '../styles';
import { AppForm } from 'commons/components/form';
import { RiArrowRightSLine } from 'react-icons/ri';
import { LoginFormProps } from './types';

export const LoginForm: React.FC<LoginFormProps> = ({
        loginLoadingState,
        loginUseCase,
        loginFormValidator
}) => {
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
                <AuthButton type="submit" variant="contained" loading={loginLoadingState.is}>
                    <RiArrowRightSLine size={35}/>
                </AuthButton>
            </AppForm>
        </FormWrapper>
    )
}