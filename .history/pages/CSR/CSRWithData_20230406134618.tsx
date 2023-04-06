import Container from '@/components/Container';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useEffect, useState } from 'react';

interface ICSRWithData {
  dataFromServer: any[];
}

const CSRWithData: React.FC<ICSRWithData> = ({ dataFromServer }) => {
  const [dataFromClient, setDataFromClient] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=2`
      );
      const data = await response.json();
      setDataFromClient(data);
    })();
  }, []);
  return (
    <Container label="Client Rendering Data">
      <div></div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<ICSRWithData> = async (
  context: GetStaticPropsContext
) => {
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
