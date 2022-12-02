import React from 'react';
import { FormWrapper } from './styles';
import { FormRow, FormTextField } from '../styles';

const CreateCompanyForm: React.FC = () => {
    return (
        <FormWrapper>
            <FormRow>
                <FormTextField id="companyName" label="Company name" variant="standard"/>
            </FormRow>
            <FormRow>
                <FormTextField id="admin.name" label="Admin name" variant="standard"/>
            </FormRow>
            <FormRow>
                <FormTextField id="admin.email" label="Admin email" variant="standard"/>
            </FormRow>
            <FormRow>
                <FormTextField id="admin.companyRole" label="Company role" variant="standard"/>
            </FormRow>
            <FormRow>
                <FormTextField id="admin.password" type="password" label="Password" variant="standard"/>
            </FormRow>
            <FormRow>
                <FormTextField id="admin.repeatPassword" type="password" label="Repeat password" variant="standard"/>
            </FormRow>
        </FormWrapper>
    )
}

export default CreateCompanyForm;