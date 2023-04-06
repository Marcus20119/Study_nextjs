export interface IContainer {
  label: string;
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ label, children }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen ring-offset-2 ring-offset-sky-300 ring-opacity-60">
      <div className="flex flex-col bg-white p-6 rounded-lg">
        <h1 className="text-white text-2xl font-bold tracking-wider">
          {label}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Container;
