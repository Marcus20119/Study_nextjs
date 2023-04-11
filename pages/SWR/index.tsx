import Container from '@/components/common/Container';
import MainButton from '@/components/common/MainButton';
import StudentDetail from '@/components/swr/StudentDetail';
import { useState } from 'react';

interface ISWRPage {}

const SWRPage: React.FC<ISWRPage> = ({}) => {
  const [detailList, setDetailList] = useState<number[]>([1, 1, 1]);

  function handleAddClick() {
    setDetailList(prevList => [...prevList, 1]);
  }
  return (
    <Container label="SWR">
      <MainButton label="Add detail" onClick={handleAddClick} />
      <div className="mt-4">
        <ul className="flex flex-col gap-2 w-full">
          {detailList.map((x, index) => (
            <li key={index}>
              <StudentDetail studentId="lea11ziflg8xoiza" />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default SWRPage;
