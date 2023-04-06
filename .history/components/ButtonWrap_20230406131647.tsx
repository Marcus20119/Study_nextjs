interface IButtonWrap {
  children: React.ReactNode;
}

const ButtonWrap: React.FC<IButtonWrap> = ({ children }) => {
  return (
    <>
      <div
        className="w-full flex justify-center items-center p-20"
        style={{
          height: '100vh',
          maxHeight: '-webkit-fill-available',
        }}
      >
        <div
          className={`w-full grid gap-4 bg-blue-900/20 p-1 rounded-xl grid-cols-5`}
          style={{
            backgroundColor: 'rgb(30 58 138/.2)',
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ButtonWrap;
