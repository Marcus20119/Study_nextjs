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
        className="w-full flex justify-center items-center p-20"
        style={{
          height: '100vh',
          maxHeight: '-webkit-fill-available',
        }}
      >
        <div
          className="w-full grid grid-cols-6 gap-4 bg-blue-900/20 p-1 rounded-xl"
          style={{
            backgroundColor: 'rgb(30 58 138/.2)',
          }}
        >
          {tabsData.map(tab => (
            <button
              key={tab.path}
              className="flex justify-center items-center bg-cyan-600 py-3 rounded-md text-zinc-100 text-lg font-bold"
            >
              <Link href={tab.path}>{tab.name}</Link>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
