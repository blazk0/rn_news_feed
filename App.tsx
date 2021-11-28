import React from 'react';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'jotai';

import AppContainer from '@navigation/AppContainer';
import { queryClient } from '@utils/queryConfig';
import { useAppLanguage } from '@hooks/utils/useAppLanguage';

const App = () => {
  useAppLanguage();

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <AppContainer />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
