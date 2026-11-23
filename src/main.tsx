import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/cormorant-garamond/latin-500-italic.css';
import '@fontsource/cormorant-garamond/latin-600.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import './styles.css';
import App from './App';

const root = document.getElementById('root')!;
const page = <StrictMode><App/></StrictMode>;
if (root.hasChildNodes()) hydrateRoot(root, page);
else createRoot(root).render(page);
