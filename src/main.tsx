import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ProviderContainer from './ProviderContainer.tsx';

const storedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(storedTheme);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProviderContainer>
    <App />
  </ProviderContainer>,
);
