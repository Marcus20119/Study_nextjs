interface ITestComponent {
  text: string;
}

const TestComponent: React.FC<ITestComponent> = ({ text }) => {
  return (
    <div className="flex justify-center items-center rounded-lg py-4 px-3 text-lg font-bold bg-white/90 text-cyan-700">
      {text}
    </div>
  );
};

export default TestComponent;
