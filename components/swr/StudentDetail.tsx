import useSWR from 'swr';
import MainButton from '../common/MainButton';

interface IStudentDetail {
  studentId: string;
}

const MILLISECOND_PER_HOUR = 2000;

const StudentDetail: React.FC<IStudentDetail> = ({ studentId }) => {
  /**
   * Khi truyền đối số vào useSWR có 2 trường hợp:
   * - Truyền key: Phải truyền thêm fetcher và các useSWR có key giống nhau sẽ liên kết với nhau
   * - Truyền url: Không cần truyền thêm fetcher mà nó sẽ lấy fetcher ở SWRConfig và các useSWR có url giống nhau sẽ liên kết với nhau
   */
  const { data, error, mutate, isValidating } = useSWR(
    `/students/${studentId}`,
    {
      revalidateOnMount: true, // Mới vào tab sẽ gọi api
      revalidateOnFocus: false, // Chuyển tab sẽ không gọi lại api (Vấn đề gặp trong Mark Movie)
      dedupingInterval: MILLISECOND_PER_HOUR, // Khi vượt quá thời gian này thì sẽ gọi lại api nếu lỗi hoặc được gọi api ở đâu đó trong các useSWR liên kết
    }
  );

  /**
   * Tham số thứ 2 của mutate:
   * - true: Tạm thời gán tham số thứ nhất cho data và âm thầm gọi lại api và gán lại giá trị mới cho data sau khi gọi xong
   * - false: Chỉ gán tham số thứ nhất cho data chứ không gọi lại api
   */
  function handleMutateClick() {
    mutate({ name: 'easy frontend' }, true);
  }

  return (
    <div>
      Name: {data?.name || '--'}{' '}
      <MainButton
        label="mutate"
        onClick={handleMutateClick}
        className="!inline-flex !w-fit !py-1"
      />
    </div>
  );
};

export default StudentDetail;
