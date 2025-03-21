import { useEmployeesStore, useFilterStore } from "../store/store";

const EmployeeSelect = ({ setSelected }) => {
  const employees = useEmployeesStore((state) => state.employees);

  const filteringByEmployees = useFilterStore(
    (state) => state.filteringByEmployees
  );
  const setFilteringByEmployees = useFilterStore(
    (state) => state.setFilteringByEmployees
  );
  const setFilteredByEmployees = useFilterStore(
    (state) => state.setFilteredByEmployees
  );

  const handleSubmit = () => {
    setFilteredByEmployees(filteringByEmployees);
    window.sessionStorage.setItem("filteredByEmployees", JSON.stringify(filteringByEmployees));

    // empty selected option to unmount this component ins Select component
    setSelected("");
  };

  const handleCheck = (employee) => {
    if (filteringByEmployees.includes(employee)) {
      // if it is already checked remove from the array
      const arrayOfEmployees = filteringByEmployees.filter(
        (singleEmployee) => singleEmployee.id !== employee.id
      );
      setFilteringByEmployees(arrayOfEmployees);
      window.sessionStorage.setItem("filteringByEmployees", JSON.stringify(arrayOfEmployees));
    } else {
      // if it is not checked yet add in the array
      const arrayOfEmployees = [...filteringByEmployees, employee];
      setFilteringByEmployees(arrayOfEmployees);
      window.sessionStorage.setItem("filteringByEmployees", JSON.stringify(arrayOfEmployees));
    }
  };

  return (
    <div className="bg-white absolute top-[60px] right-[0] left-[0] px-[30px] pt-[40px] pb-[20px] flex flex-col w-[100%] gap-[25px] rounded-[10px] border-[0.5px] border-[#8338EC]">
      <div className="flex flex-col gap-[22px] max-h-[200px] overflow-y-auto">
        {employees.map((employee) => (
          <div key={employee.id} className="flex items-center">
            <input
              type="checkbox"
              onChange={() => handleCheck(employee)}
              checked={filteringByEmployees.map(e => e.id).includes(employee.id)}
              id={employee.id}
            />
            <img src={employee.avatar} className="w-[28px] h-[28px] ml-[15px] rounded-full" alt="employee avatar" />
            <label className="ml-[15px]" htmlFor={employee.id}>
              {`${employee.name} ${employee.surname}`}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="py-[8px] px-[50px] cursor-pointer text-white bg-[#8338EC] hover:bg-[#B588F4] rounded-[20px]">
          არჩევა
        </button>
      </div>
    </div>
  );
};
export default EmployeeSelect;
