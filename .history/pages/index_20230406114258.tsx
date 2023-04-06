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
        className="w-full flex justify-center items-center"
        style={{
          height: '100vh',
          maxHeight: '-webkit-fill-available',
        }}
      >
        <div className="w-full grid grid-cols-6 gap-4">
          {tabsData.map(tab => (
            <button
              key={tab.path}
              className="flex justify-center items-center bg-violet-400 py-3 rounded-md"
            >
              <Link href={tab.path}>{tab.name}</Link>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
