interface IMainButton {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  className?: string;
}

const MainButton: React.FC<IMainButton> = ({
  onClick,
  label,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      className={`flex justify-center items-center w-full rounded-lg py-4 px-3 text-lg font-bold bg-white/10 text-white hover:bg-white/90 hover:text-cyan-700 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default MainButton;
