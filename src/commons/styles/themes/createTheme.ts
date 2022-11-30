export type ThemeOptions = {
    cssVars: string,
    theme: object
}

export const createTheme = (name: string, items: Object): ThemeOptions => {
    const prefix = `--${name}`;
    const theme: any = {};

    const cssVars = Object.entries(items).map(([key, value]) => {
        const varName = `${prefix}-${key}`;
        const cssVarName = `${varName}:${value}`;

        theme[key] = `var(${varName})`

        return cssVarName;
    }).join(';')

    return { cssVars, theme }
}