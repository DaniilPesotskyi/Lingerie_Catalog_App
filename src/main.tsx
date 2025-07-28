import './index.css'

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";

import App from './App.tsx'
import Provider from "./Provider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter basename={'/'}>
            <Provider>
                <App/>
            </Provider>
        </BrowserRouter>
    </StrictMode>,
)
