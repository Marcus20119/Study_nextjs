import { authApi } from '@/api-client';
import Container from '@/components/common/Container';
import MainButton from '@/components/common/MainButton';

interface ILoginPage {}

const LoginPage: React.FC<ILoginPage> = ({}) => {
  const handleLogIn = async () => {
    try {
      await authApi.login({
        username: 'test1',
        password: '123456',
      });
    } catch (err) {
      console.log('failed to login', err);
    }
  };
  const handleLogOut = async () => {
    try {
      await authApi.logout();
    } catch (err) {
      console.log('failed to logout', err);
    }
  };
  const handleGetProfile = async () => {
    try {
      await authApi.getProfile();
    } catch (err) {
      console.log('failed to get profile', err);
    }
  };
  return (
    <Container label="Log In Form">
      <div className="flex flex-col gap-3 w-full">
        <MainButton label="Log In" onClick={handleLogIn} />
        <MainButton label="Log Out" onClick={handleLogOut} />
        <MainButton label="Get Profile" onClick={handleGetProfile} />
      </div>
    </Container>
  );
};

export default LoginPage;
