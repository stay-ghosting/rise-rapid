interface RadioButtonsProps {
  budgetFields: { label: string; value: string }[];
  selectedBudget: string;
  setSelectedBudget: (budget: string ) => void;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ budgetFields, selectedBudget, setSelectedBudget }) => {
  
  return (
    <>
      {budgetFields.map((field) => (
        <button
          key={field.value}
          type='button'
          onClick={() => setSelectedBudget(field.value)}
          className={`px-4 py-2 rounded transition-colors border-2 shadow-xl text-[2rem]  sm:text-[1.5rem] lg:text-[1.25rem]  shadow-shadow bg-card hover:bg-[#303030] text-white ${selectedBudget === field.value ? "border-white" : "border-transparent"}`}
        >
          {field.label}
        </button>
      ))}
    </>
  );
};

export default RadioButtons;
