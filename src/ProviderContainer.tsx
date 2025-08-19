import AntdProvider from './Module/core/lib/AntdProvider';
import I18nProvider from './Module/core/lib/I18nProvider';
import QueryProvider from './Module/core/lib/ReactQueryProvider';
import { BrowserRouter } from 'react-router-dom';
import ToastifyProvider from '@Module/core/lib/ToastifyProvider';

function ProviderContainer({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter   future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
     basename="/">
      <QueryProvider>
        <I18nProvider>
          <AntdProvider>
            <ToastifyProvider>{children}</ToastifyProvider>
          </AntdProvider>
        </I18nProvider>
      </QueryProvider>
    </BrowserRouter>
  );
}

export default ProviderContainer;
