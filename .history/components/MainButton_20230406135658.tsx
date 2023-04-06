interface IMainButton {
  onClick: () => void;
}

const MainButton: React.FC<IMainButton> = ({ onClick }) => {
  return (
    <button className="flex justify-center items-center rounded-lg py-4 px-3 text-lg font-bold bg-white/10 py-3 text-white hover:bg-white/90 hover:text-cyan-700"></button>
  );
};

export default MainButton;
