export interface IContainer {
  label: string;
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ label, children }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col bg-sky-900/75 p-6 rounded-lg ring-2ring-offset-2 ring-offset-sky-300 ring-opacity-60 ring-white shadow-md">
        <h1 className="text-white text-2xl font-bold tracking-wider">
          {label}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Container;
