export interface IBackButton {}

const BackButton: React.FC<IBackButton> = ({}) => {
  return (
    <button className="fixed top-10 right-10 flex justify-center items-center w-10 h-10 bg-white/10 py-3 text-white text-lg font-bold rounded-lg hover:bg-white/90 hover:text-cyan-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </button>
  );
};

export default BackButton;
