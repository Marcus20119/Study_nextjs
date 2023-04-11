import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useResponsive } from '@/hooks';
import ButtonWrap from '@/components/common/ButtonWrap';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const tabsData: {
    path: string;
    name: string;
  }[] = [
    {
      path: '/SSG',
      name: 'SSG',
    },
    {
      path: '/CSR',
      name: 'CSR',
    },
    {
      path: '/SSR',
      name: 'SSR',
    },
    {
      path: '/ISR/1',
      name: 'ISR',
    },
    {
      path: '/LayoutExample',
      name: 'Layout',
    },
    {
      path: '/loginOrigin',
      name: 'API',
    },
    {
      path: '/SWR',
      name: 'SWR',
    },
    {
      path: '/loginUseAuthC3',
      name: 'useAuth',
    },
    {
      path: '/ProtectedRoute',
      name: 'Protected Route',
    },
  ];
  return (
    <>
      <ButtonWrap>
        {tabsData.map(tab => (
          <Link
            href={tab.path}
            key={tab.path}
            className="flex justify-center items-center bg-white/10 py-3 text-white text-lg font-bold rounded-lg hover:bg-white/90 hover:text-cyan-700"
          >
            {tab.name}
          </Link>
        ))}
      </ButtonWrap>
    </>
  );
}
