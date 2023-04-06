import Container from '@/components/Container';

interface ICSROnly {}

const CSROnly: React.FC<ICSROnly> = ({}) => {
  return <Container label="Client Site Rendering Only"></Container>;
};

export default CSROnly;
