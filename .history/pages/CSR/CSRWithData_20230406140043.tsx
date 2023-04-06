import Container from '@/components/Container';
import TestComponent from '@/components/TestComponent';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useEffect, useState } from 'react';

interface ICSRWithData {
  dataFromServer: any[];
}

const CSRWithData: React.FC<ICSRWithData> = ({ dataFromServer }) => {
  console.log('dataFromServer:', dataFromServer);
  const [dataFromClient, setDataFromClient] = useState<any[]>([]);
  console.log('dataFromClient:', dataFromClient);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=2`
      );
      const data = await response.json();
      setDataFromClient(data.data);
    })();
  }, []);
  return (
    <Container label="CSR With Data">
      <TestComponent text="Open DevTool to see data" />
    </Container>
  );
};

export const getStaticProps: GetStaticProps<ICSRWithData> = async (
  context: GetStaticPropsContext
) => {
  console.log('-----GET STATIC PROPS-----');
  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts?_page=1`
  );
  const data = await response.json();
  return {
    props: {
      dataFromServer: data.data.map((post: any) => ({
        title: post.title,
        id: post.id,
      })),
    },
  };
};

export default CSRWithData;
