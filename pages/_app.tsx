import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import { axiosClient } from '@/api-client';
import { SWRConfig } from 'swr';
import EmptyLayout from '@/layouts/EmptyLayout';

export interface LayoutProps {
  children: React.ReactNode;
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  // emotionCache?: EmotionCache
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SWRConfig
      value={{
        fetcher: url => axiosClient.get(url),
        shouldRetryOnError: false, // Tắt chức năng khi bị fail thì gửi lại request vì ít có khả năng thành công
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
