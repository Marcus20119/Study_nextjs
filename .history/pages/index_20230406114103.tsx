import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

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
];

export default function Home() {
  return (
    <>
      <div
        className="w-full grid grid-cols-6"
        style={{
          height: '100vh',
          maxHeight: '-webkit-fill-available',
        }}
      >
        {tabsData.map(tab => (
          <button key={tab.path}>
            <Link href={tab.path}>{tab.name}</Link>
          </button>
        ))}
      </div>
    </>
  );
}