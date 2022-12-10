import React from 'react';
import './App.css';
import ThemeContextProvider from './commons/styles/ThemeContextProvider';
import { GlobalStyle } from './commons/styles';
import { AppRoutes } from './app/routes/AppRoutes';
import { AnimatePresence } from 'framer-motion';
import { SnackbarProvider } from 'notistack';
import { commonContextFactory } from './commons/config/commonFactory';
import { Provider as CommonContextProvider } from './commons/config/context';
import { SnackbarNotificatorProvider } from './commons/components/notificator/snack-bar';

function App() {
    const commonContext = commonContextFactory;

    return (
        <CommonContextProvider moduleContext={commonContext}>
            <SnackbarProvider maxSnack={3} autoHideDuration={1500}
                              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <SnackbarNotificatorProvider/>
                <AnimatePresence>
                    <ThemeContextProvider>
                        <GlobalStyle/>
                        <div className="app-root">
                            <AppRoutes/>
                        </div>
                    </ThemeContextProvider>
                </AnimatePresence>
            </SnackbarProvider>
        </CommonContextProvider>
    );
}

export default App;
