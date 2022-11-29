import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themes';

type ThemeProviderType = {
    theme: string,
    themeToggle: () => void

};

export const ThemeContext = React.createContext<ThemeProviderType>({} as ThemeProviderType);


const useThemeMode = () => {
    const [theme, setTheme] = useState('dark');

    const setMode = (mode: string) => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    };

    const themeToggle = () => (theme === 'dark' ? setMode('light') : setMode('dark'));

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
    }, []);

    return { theme, themeToggle };
};

const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const themeMode = useThemeMode();
    const theme = themeMode.theme === 'dark' ? darkTheme : lightTheme;


    return (
        <ThemeContext.Provider value={themeMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeProviderType => {
    return useContext(ThemeContext);
}

export default ThemeContextProvider;