/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider as ThemeProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';

const ChakraRenderer: React.FC = ({
  children,
}: React.PropsWithChildren<Record<string, any>>) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui: JSX.Element, options = {}) =>
  render(ui, {
    wrapper: ChakraRenderer,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
