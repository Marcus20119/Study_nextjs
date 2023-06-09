import Container from '@/components/common/Container';
import MainButton from '@/components/common/MainButton';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface ICSRWithQueryPage {}

const CSRWithQueryPage: React.FC<ICSRWithQueryPage> = ({}) => {
  const router = useRouter();
  const [dataFromClient, setDataFromClient] = useState<any[]>([]);
  console.log('dataFromClient:', dataFromClient);

  const pageQuery = router.query?.page;
  useEffect(() => {
    if (!pageQuery) return;
    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${pageQuery}`
      );
      const data = await response.json();
      setDataFromClient(data.data);
    })();
  }, [pageQuery]);

  const handleClickNext = () => {
    // Thêm shallow = true để khi query thay đổi, sẽ không gọi lại hàm getStaticProps bên phía server
    router.push(
      {
        pathname: '/CSR/CSRWithQuery',
        query: {
          page: (Number(router.query?.page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Container label="CSR With Data Based On Query">
      <MainButton label="Next Page" onClick={handleClickNext} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps<ICSRWithQueryPage> = async (
  context: GetStaticPropsContext
) => {
  console.log('-----GET STATIC PROPS-----');
  return {
    props: {},
  };
};

export default CSRWithQueryPage;
