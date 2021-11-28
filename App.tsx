import React from 'react';
import { QueryClientProvider } from 'react-query';

import AppContainer from '@navigation/AppContainer';
import { queryClient } from '@utils/queryConfig';
import { useAppLanguage } from '@hooks/utils/useAppLanguage';

const App = () => {
  useAppLanguage();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer />
    </QueryClientProvider>
  );
};

export default App;
