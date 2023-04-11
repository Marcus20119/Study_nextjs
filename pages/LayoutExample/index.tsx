import Container from '@/components/common/Container';
import TestComponent from '@/components/common/TestComponent';
import MainLayout from '@/layouts/MainLayout';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';

// Hình như bỏ interface vào nó không chạy
const LayoutExamplePage: NextPageWithLayout = ({}) => {
  return (
    <Container label="Layout Example">
      <TestComponent text="This Page has Main Layout" />
    </Container>
  );
};

LayoutExamplePage.Layout = MainLayout;

export default LayoutExamplePage;
