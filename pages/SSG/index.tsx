import Container from '@/components/common/Container';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

interface IPostsPage {
  posts: any[];
}

export default function PostsPage({ posts }: IPostsPage) {
  return (
    <Container label="STATIC SITE GENERATION PAGE">
      <ul className="flex flex-col gap-2">
        {posts.map(post => (
          <li key={post.id} className="text-lg hover:opacity-80">
            <Link href={`/SSG/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

// Chỉ chạy phía server, dùng để gọi api và trả về dữ liệu
export const getStaticProps: GetStaticProps<IPostsPage> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts?_page=1`
  );
  const data = await response.json();
  return {
    props: {
      posts: data.data.map((post: any) => ({ title: post.title, id: post.id })),
    },
  };
};
