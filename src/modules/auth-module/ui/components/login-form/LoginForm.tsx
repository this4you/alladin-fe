import React from 'react';
import { FormWrapper, GoogleIcon } from './styles';
import googleIcon from 'commons/img/svg/google-icon.svg';
import { AuthButton, FormRow, FormTextField } from '../styles';
import { AppForm } from 'commons/components/form';
import { RiArrowRightSLine } from 'react-icons/ri';
import { FormValidator } from 'commons/components/form/types';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { ValidatorFieldUtils } from 'commons/utils/ValidatorUtils';
import { Login } from 'modules/auth-module/application/models/Login';

class LoginFormValidator implements FormValidator<Login> {
    validate(data: Login): FieldErrors<Login> {
        return {
            email: ValidatorFieldUtils.required(data.email) || ValidatorFieldUtils.email(data.email),
            password: ValidatorFieldUtils.required(data.password)
        };
    }
}

const LoginForm: React.FC = () => {
    const submit = (data: Login) => {
        alert(data);
    }

    return (
        <FormWrapper>
            <AppForm submit={submit} formValidator={new LoginFormValidator()}>
                <FormRow>
                    <FormTextField id="email" name="email" label="Email" variant="standard"/>
                </FormRow>
                <FormRow>
                    <FormTextField id="password" name="password" type="password" label="Password" variant="standard"/>
                </FormRow>
                <GoogleIcon src={googleIcon} alt="google icon"/>
                <AuthButton type="submit" variant='contained'>
                    <RiArrowRightSLine size={35}/>
                </AuthButton>
            </AppForm>
        </FormWrapper>
    )
}

export default LoginForm;