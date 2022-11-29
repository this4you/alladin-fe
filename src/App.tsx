import React from 'react';
import './App.css';
import { AuthPage } from './app/pages';
import ThemeContextProvider from './commons/styles/ThemeContextProvider';
import { GlobalStyle } from './commons/styles';

function App() {
    return (
        <ThemeContextProvider>
            <GlobalStyle/>
            <div className="app-root">
                <AuthPage/>
            </div>
        </ThemeContextProvider>
    );
}

export default App;
