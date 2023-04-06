import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';

export interface IPosts {
  posts: any[];
}

export default function Posts({ posts }: IPosts) {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col">
        <h1 className="text-white text-xl font-bold">
          STATIC SITE GENERATION PAGE
        </h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/SSG/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<IPosts> = async (
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
