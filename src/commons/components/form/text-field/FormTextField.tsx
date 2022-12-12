import React from 'react';
import { TextField } from '@mui/material';
import { FieldError, useFormContext } from 'react-hook-form';
import { FormTextFieldProps } from './types';

export const FormTextField: React.FC<FormTextFieldProps> = ({ name, ...rest }) => {
    const { register, formState: { errors } } = useFormContext();

    let fieldError = errors[name] as FieldError;

    return <TextField error={!!errors[name]} helperText={fieldError?.message} {...register(name)} {...rest}/>;
}