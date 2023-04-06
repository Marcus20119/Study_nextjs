export interface IContainer {
  label: string;
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ label, children }) => {
  return (
    <div
      className="flex justify-center items-center w-screen h-screen"
      style={{
        backgroundImage: 'linear-gradient(to right,#22d3ee, #0ea5e9)',
      }}
    >
      <div className="flex flex-col bg-sky-900/75 px-5 py-4 rounded-lg ring-2 ring-offset-2 ring-offset-sky-300 ring-opacity-60 ring-white shadow-md">
        <h1 className="text-white text-2xl font-bold tracking-wider">
          {label}
        </h1>
        <div className="text-sky-100">{children}</div>
      </div>
    </div>
  );
};

export default Container;
