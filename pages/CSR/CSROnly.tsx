import Container from '@/components/common/Container';
import dynamic from 'next/dynamic';

// Có thể chỉ định 1 components nào đó render theo 1 cách nhất định
const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/common/TestComponent'),
  { ssr: false }
);

interface ICSROnlyPage {}

const CSROnlyPage: React.FC<ICSROnlyPage> = ({}) => {
  return (
    <Container label="Client Side Rendering Only">
      <DynamicComponentWithNoSSR text="This Component will render from client site only" />
    </Container>
  );
};

export default CSROnlyPage;
