import Container from '@/components/Container';
import MainButton from '@/components/MainButton';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface ICSRWithQuery {}

const CSRWithQuery: React.FC<ICSRWithQuery> = ({}) => {
  const router = useRouter();
  const [dataFromClient, setDataFromClient] = useState<any[]>([]);
  console.log('dataFromClient:', dataFromClient);

  const pageQuery = router.query?.page;
  useEffect(() => {
    if (!pageQuery) return;
    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=2`
      );
      const data = await response.json();
      setDataFromClient(data.data);
    })();
  }, [pageQuery]);

  const handleClickNext = () => {
    router.push({
      pathname: '/CSR/SRCWithQuery',
      query: {
        page: (Number(router.query?.page) || 1) + 1,
      },
    });
  };

  return (
    <Container label="CSR With Data Based On Query">
      <MainButton label="Next Page" onClick={handleClickNext} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps<ICSRWithQuery> = async (
  context: GetStaticPropsContext
) => {
  console.log('-----GET STATIC PROPS-----');
  return {
    props: {},
  };
};

export default CSRWithQuery;
