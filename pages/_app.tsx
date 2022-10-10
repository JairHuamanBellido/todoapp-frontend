import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from '../theme/DefaultTheme';
import { GlobalStyle } from '../theme/styles/globalStyles';
import Head from 'next/head';
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={DefaultTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
