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
    //transition: all 0.3s ease-out;
  }

  div {
    scrollbar-gutter: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }: GlobalThemeProps) => theme.scroll};
      border-radius: 10px;
    }
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

  a, a:visited, a:hover, a:active {
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

`;

export default withTheme(globalStyle);