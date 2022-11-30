import { darkThemePalette } from './palettes/dark';
import { createTheme, ThemeOptions } from './createTheme';

export const applicationThemes: any = {
    dark: createTheme('dark', darkThemePalette),
};

export const getThemesCssVars = () => {
   return Object.entries(applicationThemes).map(([key, value]) => {
       const themeOptions = value as ThemeOptions;

       return themeOptions.cssVars;
   }).join(';')
}