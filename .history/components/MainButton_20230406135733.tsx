interface IMainButton {
  onClick: () => void;
  label: string;
}

const MainButton: React.FC<IMainButton> = ({ onClick, label }) => {
  return (
    <button
      className="flex justify-center items-center rounded-lg py-4 px-3 text-lg font-bold bg-white/10 text-white hover:bg-white/90 hover:text-cyan-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default MainButton;
