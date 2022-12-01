import React from 'react';
import './App.css';
import ThemeContextProvider from './commons/styles/ThemeContextProvider';
import { GlobalStyle } from './commons/styles';
import { AppRoutes } from './app/routes/AppRoutes';

function App() {
    return (
        <ThemeContextProvider>
            <GlobalStyle/>
            <div className="app-root">
                <AppRoutes/>
            </div>
        </ThemeContextProvider>
    );
}

export default App;
