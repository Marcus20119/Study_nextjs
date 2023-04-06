import Container from '@/components/Container';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/TestComponent'),
  { ssr: false }
);

interface ICSROnly {}

const CSROnly: React.FC<ICSROnly> = ({}) => {
  return (
    <Container label="Client Site Rendering Only">
      <DynamicComponentWithNoSSR />
    </Container>
  );
};

export default CSROnly;
