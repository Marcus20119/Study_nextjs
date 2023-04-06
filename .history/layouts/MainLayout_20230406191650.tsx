interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return <div className="main-layout">{children}</div>;
};

export default MainLayout;
