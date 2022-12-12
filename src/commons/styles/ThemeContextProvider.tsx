import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { applicationThemes } from './themes';

//TODO NEED A GLOBAL REFACTORING AND INVESTIGATION
const MUDarkTheme = createTheme({
    palette: {
        primary: {
            main: '#7066CB',
        },
        text: {
            primary: '#ffffff',
            secondary: '#515869'
        }
    },
});

type ThemeProviderType = {
    theme: string,
    themeToggle: (theme: string) => void

};

export const ThemeContext = React.createContext<ThemeProviderType>({} as ThemeProviderType);


const useThemeMode = () => {
    const [theme, setTheme] = useState('dark');

    const setMode = (mode: string) => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    };

    const themeToggle = (theme: string) => setMode(theme);

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
    }, []);

    return { theme, themeToggle };
};

const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const themeMode = useThemeMode();
    const theme = applicationThemes[themeMode.theme].theme;


    return (
        <ThemeContext.Provider value={themeMode}>
            <ThemeProvider theme={MUDarkTheme}>
                <StyledComponentThemeProvider theme={theme}>
                    {children}
                </StyledComponentThemeProvider>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useApplicationTheme = (): ThemeProviderType => {
    return useContext(ThemeContext);
}

export default ThemeContextProvider;