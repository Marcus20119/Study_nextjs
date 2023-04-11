import Container from '@/components/common/Container';
import MainButton from '@/components/common/MainButton';
import { useAuth } from '@/hooks/useAuthC3';

interface ILoginPage {}

const LoginPage: React.FC<ILoginPage> = ({}) => {
  // revalidateOnMount: false vì không muốn mới vào trang mà đã gọi api get Profile
  const { profile, login, logout } = useAuth({ revalidateOnMount: false });
  const handleLogIn = async () => {
    try {
      await login({
        username: 'test1',
        password: '123456',
      });
    } catch (err) {
      console.log('failed to login', err);
    }
  };
  const handleLogOut = async () => {
    try {
      await logout();
    } catch (err) {
      console.log('failed to logout', err);
    }
  };

  return (
    <Container label="Log In Form">
      <div className="flex flex-col gap-3 w-full">
        <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
        <MainButton label="Log In" onClick={handleLogIn} />
        <MainButton label="Log Out" onClick={handleLogOut} />
      </div>
    </Container>
  );
};

export default LoginPage;
