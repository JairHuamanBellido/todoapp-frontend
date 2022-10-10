import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from '../../../theme/DefaultTheme';
import { GlobalStyle } from '../../../theme/styles/globalStyles';

interface IGlobalProvider {
  children: ReactNode;
}
const GlobalProvider = ({ children }: IGlobalProvider) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export const renderAllProviders = (ui: React.ReactElement): RenderResult => {
  return render(ui, { wrapper: GlobalProvider});
};
