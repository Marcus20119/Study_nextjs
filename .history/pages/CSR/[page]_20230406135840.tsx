import Container from '@/components/Container';
import MainButton from '@/components/MainButton';

interface ICSRWithQuery {}

const CSRWithQuery: React.FC<ICSRWithQuery> = ({}) => {
  return (
    <Container label="CSR With Data Based On Query">
      <MainButton label="Next Page" onClick={() => {}} />
    </Container>
  );
};

export default CSRWithQuery;
