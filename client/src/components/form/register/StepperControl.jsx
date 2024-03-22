export default function StepperControl({ handleClick, currentStep, steps }) {
  
  return (
    <div className="container mt-4 mb-8 flex justify-between">
      <button
        type="button"
        onClick={() => handleClick("back")}
        className={`cursor-pointer inline-block  pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-yellow-700 rounded-lg transition duration-200 hover:bg-orange-300 ease w-32  ${currentStep === 1 ? ' hidden ' : ''}`}
      >
        Back
      </button>

      <button
        type="button"
        onClick={() => handleClick('next')}
        className={`cursor-pointer inline-block  pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-yellow-700 rounded-lg transition duration-200 hover:bg-orange-300 ease ${currentStep === 1 ? 'w-full' : 'w-32'}`}
      >
        {currentStep === steps.length ? `Confirm` : `Next`}
      </button>
    </div>
  );
}
