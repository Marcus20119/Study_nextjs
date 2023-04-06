interface ITestComponent {}

const TestComponent: React.FC<ITestComponent> = ({}) => {
  return (
    <div className="flex justify-center items-center rounded-lg py-4 px-3 text-lg font-bold bg-white/90 text-cyan-700">
      This is a Test Component
    </div>
  );
};

export default TestComponent;
