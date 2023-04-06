interface ITestComponent {}

const TestComponent: React.FC<ITestComponent> = ({}) => {
  return (
    <div className="flex justify-center items-center rounded-lg w-12 h-12 text-lg font-bold bg-white/90 text-cyan-700">
      This is a Test Component
    </div>
  );
};

export default TestComponent;
