import BackButton from '@/components/common/BackButton';
import ButtonWrap from '@/components/common/ButtonWrap';
import Link from 'next/link';

interface ICSRPage {}

const CSRPage: React.FC<ICSRPage> = ({}) => {
  const tabsData: {
    path: string;
    name: string;
  }[] = [
    {
      path: '/CSR/CSROnly',
      name: 'CSR Only',
    },
    {
      path: '/CSR/CSRWithData',
      name: 'CSR With Data',
    },
    {
      path: '/CSR/CSRWithQuery?page=1',
      name: 'CSR With Query',
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
      <BackButton />
    </>
  );
};

export default CSRPage;
