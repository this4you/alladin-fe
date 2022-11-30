import React, { useState } from 'react';
import { FormRow, FormTextField, FormWrapper } from './styles';

const LoginForm: React.FC = () => {
    return (
        <FormWrapper>
            <FormRow>
                <FormTextField id="email" label="Email" variant="standard"/>
            </FormRow>
            <FormRow>
                <FormTextField id="password" type="password" label="Password" variant="standard"/>
            </FormRow>
        </FormWrapper>
    )
}

export default LoginForm;