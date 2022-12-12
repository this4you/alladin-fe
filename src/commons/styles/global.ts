import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes/ThemeProps';
import { getThemesCssVars } from './themes';

type GlobalThemeProps = {
    theme: ThemeProps;
};


const globalStyle = createGlobalStyle`
  :root {
    ${getThemesCssVars()}
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    width: 50vw;
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
  }
  
  a {
    font-family: 'Inter', sans-serif;
    text-decoration: none
  }

  h1 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

`;

export default withTheme(globalStyle);