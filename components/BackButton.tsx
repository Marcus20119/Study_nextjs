import { useRouter } from 'next/router';

interface IBackButton {}

const BackButton: React.FC<IBackButton> = ({}) => {
  const router = useRouter();
  return (
    <button
      className="fixed top-10 right-10 flex justify-center items-center rounded-full w-12 h-12 bg-white/10 py-3 text-white text-lg font-bold hover:bg-white/90 hover:text-cyan-700"
      onClick={() => router.back()}
    >
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
