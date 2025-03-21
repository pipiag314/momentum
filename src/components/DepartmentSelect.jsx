import { useDepartmentsStore, useFilterStore, useTasksStore } from "../store/store";

const DepartmentSelect = ({ setSelected }) => {
  const departments = useDepartmentsStore((state) => state.departments);

  const tasks = useTasksStore(state => state.tasks);
  const filteredTasks = useTasksStore(state => state.filteredTasks);
  const setFilteredTasks = useTasksStore(state => state.setFilteredTasks);



  const filteredByDepartments = useFilterStore(state => state.filteredByDepartments)
  const filteringByDepartments = useFilterStore(
    (state) => state.filteringByDepartments
  );
  const setFilteringByDepartments = useFilterStore(
    (state) => state.setFilteringByDepartments
  );
  const setFilteredByDepartments = useFilterStore(
    (state) => state.setFilteredByDepartments
  );

  const handleSubmit = () => {
    setFilteredByDepartments(filteringByDepartments);
    window.sessionStorage.setItem(
      "filteredByDepartments",
      JSON.stringify(filteringByDepartments)
    );



    
    // empty selected option to unmount the component
    setSelected("");
  };

  const handleCheck = (department) => {
    if (filteringByDepartments.map(d => d.id).includes(department.id)) {
      // if it is already checked remove from the array
      const arrayOfDepartaments = filteringByDepartments.filter(
        (singleDepartment) => singleDepartment.id !== department.id
      );
      setFilteringByDepartments(arrayOfDepartaments);
      window.sessionStorage.setItem(
        "filteringByDepartments",
        JSON.stringify(arrayOfDepartaments)
      );
    } else {
      // if it is not checked add in the array
      const arrayOfDepartaments = [...filteringByDepartments, department];
      setFilteringByDepartments(arrayOfDepartaments);
      window.sessionStorage.setItem(
        "filteringByDepartments",
        JSON.stringify(arrayOfDepartaments)
      );
    }
  };

  return (
    <div className="bg-white absolute top-[60px] right-[0] left-[0] px-[30px] pt-[40px] pb-[20px] flex flex-col w-[100%] gap-[25px] rounded-[10px] border-[0.5px] border-[#8338EC]">
      <div className="flex flex-col gap-[22px]  max-h-[200px] overflow-y-auto">
        {departments.map((department) => (
          <div key={department.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(department)}
              checked={filteringByDepartments.map(d => d.id).includes(department.id)}
              id={department.id}
            />
            <label className="ml-[15px]" htmlFor={department.id}>
              {department.name}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          onClick={handleSubmit}
          className="py-[8px] px-[50px] cursor-pointer text-white bg-[#8338EC] hover:bg-[#B588F4] rounded-[20px]">
          არჩევა
        </button>
      </div>
    </div>
  );
};
export default DepartmentSelect;
