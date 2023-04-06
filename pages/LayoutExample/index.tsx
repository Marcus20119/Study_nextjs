import Container from '@/components/Container';
import TestComponent from '@/components/TestComponent';
import MainLayout from '@/layouts/MainLayout';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';

const LayoutExample: NextPageWithLayout = ({}) => {
  return (
    <Container label="Layout Example">
      <TestComponent text="This Page has Main Layout" />
    </Container>
  );
};

LayoutExample.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default LayoutExample;
