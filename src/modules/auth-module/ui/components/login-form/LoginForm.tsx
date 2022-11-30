import React, { useState } from 'react';
import { FormWrapper } from './styles';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import { useApplicationTheme } from '../../../../../commons/styles/ThemeContextProvider';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
        borderWidth: 3,
        borderRadius: 20
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: 'green',
        borderWidth: 3,
    },
    '& .MuiInput-underline': {
        borderBottomColor: 'green',
        borderWidth: 3,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'red',
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

const LoginForm: React.FC = () => {
    return (
        <FormWrapper>
            <CssTextField id="standard-basic" label="Email" variant="standard"/>
            <CssTextField type="password" id="standard-basic" label="Password" variant="standard"/>
        </FormWrapper>
    )
}

export default LoginForm;