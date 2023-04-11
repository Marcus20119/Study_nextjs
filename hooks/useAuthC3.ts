import { authApi } from '@/api-client';
import { LoginPayload } from '@/models';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/_internal';

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    revalidateOnFocus: false,
    dedupingInterval: MILLISECOND_PER_HOUR,
    ...options,
  });

  const firstLoading = profile === undefined && error === undefined;

  async function login(payload: LoginPayload) {
    await authApi.login(payload);
    await mutate(); // Phải có wait vì tham số thứ 2 = true => có trigger api
    console.log('Redirect to somewhere');
  }

  async function logout() {
    await authApi.logout();
    // Dùng null để phân biệt với trường hợp ban đầu nó undefined
    mutate(null, false);
    console.log('Redirect to login page');
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
