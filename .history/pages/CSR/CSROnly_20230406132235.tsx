import Container from '@/components/Container';

interface ICSROnly {}

const CSROnly: React.FC<ICSROnly> = ({}) => {
  return (
    <Container label="Client Site Rendering Only">
      <div></div>
    </Container>
  );
};

export default CSROnly;
