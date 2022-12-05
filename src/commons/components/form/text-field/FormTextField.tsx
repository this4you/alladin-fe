import React from 'react';
import { TextField } from '@mui/material';
import { FormTextFieldProps } from './types';

export const FormTextField: React.FC<FormTextFieldProps> = ({ register, name, ...rest }) => {
    return <TextField {...register!(name)} {...rest}/>;
}