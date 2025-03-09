import React from 'react';
import ReactDOM from 'react-dom/client';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import './styles/globals.scss';
import './styles/styles.scss';
import App from './App';
import {Toaster, ToasterProvider} from '@gravity-ui/uikit';

const toaster = new Toaster();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ToasterProvider toaster={toaster}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ToasterProvider>,
);
