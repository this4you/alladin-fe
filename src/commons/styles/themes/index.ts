import { darkThemePalette } from './palettes/dark';
import { createTheme, ThemeOptions } from './createTheme';
import { lightThemePalette } from './palettes/light';

export const applicationThemes: any = {
    dark: createTheme('dark', darkThemePalette),
    light: createTheme('light', lightThemePalette)
};

export const getThemesCssVars = () => {
   return Object.entries(applicationThemes).map(([key, value]) => {
       const themeOptions = value as ThemeOptions;

       return themeOptions.cssVars;
   }).join(';')
}