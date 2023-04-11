import { LayoutProps } from '@/pages/_app';

const MainLayout = ({ children }: LayoutProps) => {
  return <div className="main-layout">{children}</div>;
};

export default MainLayout;
