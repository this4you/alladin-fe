import React from 'react';
import './App.css';
import ThemeContextProvider from './commons/styles/ThemeContextProvider';
import { GlobalStyle } from './commons/styles';
import { AppRoutes } from './app/routes/AppRoutes';
import { AnimatePresence } from 'framer-motion';

function App() {
    return (
        <AnimatePresence>
            <ThemeContextProvider>
                <GlobalStyle/>
                <div className="app-root">
                    <AppRoutes/>
                </div>
            </ThemeContextProvider>
        </AnimatePresence>
    );
}

export default App;
