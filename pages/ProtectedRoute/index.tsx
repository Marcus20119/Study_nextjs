import Container from '@/components/common/Container';
import MainButton from '@/components/common/MainButton';
import { useAuth } from '@/hooks/useAuthC3';
import ProtectedLayout from '@/layouts/ProtectedLayout';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../_app';

const ProtectedPage: NextPageWithLayout = ({}) => {
  const { profile, logout } = useAuth();
  const router = useRouter();

  async function handleLogoutClick() {
    try {
      await logout();
      console.log('redirect to login page');
      router.push('/loginUseAuthC3');
    } catch (error) {
      console.log('failed to logout', error);
    }
  }
  return (
    <Container label="Protected Route">
      <div className="flex flex-col gap-3 w-full">
        <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
        <MainButton label="Log Out" onClick={handleLogoutClick} />
      </div>
    </Container>
  );
};

ProtectedPage.Layout = ProtectedLayout;
export default ProtectedPage;
