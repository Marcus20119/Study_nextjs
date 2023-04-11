import Container from '@/components/common/Container';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

interface IPostPage {
  post: any;
}
export default function PostPage({ post }: IPostPage) {
  console.log('post:', post);
  return (
    <Container label="POST PAGE">
      <ul className="flex flex-col gap-2">
        {['id', 'author', 'description'].map(field => (
          <li key={`${post.id}-${field}`}>
            <p>
              {' '}
              <strong className="text-white">{`${field}: `}</strong>
              {post[field]}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

// Chỉ chạy phía server, dùng để tạo ra nhiều static file HTML cho mỗi Dynamic route
export const getStaticPaths: GetStaticPaths = async () => {
  console.log('GET STATIC PATHS');
  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts?_page=1`
  );
  const data = await response.json();
  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};

// Chỉ chạy phía server, với mỗi phần tử của paths phía trên thì sẽ chạy 1 lần tương ứng
export const getStaticProps: GetStaticProps<IPostPage> = async (
  context: GetStaticPropsContext
) => {
  // server-side - build-time
  const postId = context.params?.postId;
  console.log('\nGET STATIC PROPS', postId);
  if (!postId) return { notFound: true };

  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
};
