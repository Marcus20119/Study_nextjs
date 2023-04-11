import { useAuth } from '@/hooks/useAuthC3';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IAuth {
  children: React.ReactNode;
}

const Auth: React.FC<IAuth> = ({ children }) => {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();

  useEffect(() => {
    if (!firstLoading && !profile?.username) router.push('/loginUseAuthC3');
  }, [router, profile, firstLoading]);

  if (!profile?.username) return <p>Loading...</p>;

  return <div>{children}</div>;
};

export { Auth };
