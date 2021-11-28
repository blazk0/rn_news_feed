import React from 'react';
import { useAtom } from 'jotai';
import {
  RefreshControl as RnRefreshControl,
  RefreshControlProps,
} from 'react-native';

import { themeAtom } from '@store/theme';

const RefreshControl = (props: RefreshControlProps) => {
  const [theme] = useAtom(themeAtom);

  return (
    <RnRefreshControl
      {...props}
      colors={[theme === 'dark' ? 'white' : 'black']}
      tintColor={theme === 'dark' ? 'white' : 'black'}
    />
  );
};

export default RefreshControl;
