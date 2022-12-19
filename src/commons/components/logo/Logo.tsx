import React from 'react';
import logo from 'commons/img/svg/logo.svg';
import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = (props) => {
    return (
        <img src={logo} alt="logo" {...props} />
    );
}