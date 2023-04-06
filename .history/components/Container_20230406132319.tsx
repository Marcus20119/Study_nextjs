import BackButton from './BackButton';

interface IContainer {
  label: string;
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ label, children }) => {
  return (
    <>
      <div
        className="flex justify-center items-center w-screen h-screen"
        style={{
          backgroundImage: 'linear-gradient(to right,#22d3ee, #0ea5e9)',
        }}
      >
        <div className="flex flex-col min-w-[500px] max-w-[700px] bg-sky-900/75 px-10 py-6 rounded-lg ring-2 ring-offset-2 ring-offset-sky-300 ring-opacity-60 ring-white shadow-md">
          <h1 className="text-white text-3xl font-bold tracking-wider">
            {label.toUpperCase()}
          </h1>
          <div className="mt-4 text-sky-100">{children}</div>
        </div>
      </div>
      <BackButton />
    </>
  );
};

export default Container;
