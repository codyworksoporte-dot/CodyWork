import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';
import './styles/main.css';

const container = document.getElementById('root')!;
if (container.querySelector('main')) hydrateRoot(container, <App />);
else createRoot(container).render(<App />);
