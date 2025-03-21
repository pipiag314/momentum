import { useFilterStore, usePrioritiesStore } from "../store/store";

const PrioritySelect = ({ setSelected }) => {
  const priorities = usePrioritiesStore((state) => state.priorities);

  const filteringByPriorities = useFilterStore(
    (state) => state.filteringByPriorities
  );
  const setFilteringByPriorities = useFilterStore(
    (state) => state.setFilteringByPriorities
  );
  const setFilteredByPriorities = useFilterStore(
    (state) => state.setFilteredByPriorities
  );

  const handleSubmit = () => {
    setFilteredByPriorities(filteringByPriorities);
    window.sessionStorage.setItem("filteredByPriorities", JSON.stringify(filteringByPriorities));

    // empty selected option to unmount the component
    setSelected("");
  };

  const handleCheck = (priority) => {
    if (filteringByPriorities.map(p => p.id).includes(priority.id)) {
      // if it is already checked remove from the array
      const arrayOfPriorities = filteringByPriorities.filter(
        (singlePriority) => singlePriority.id !== priority.id
      );
      setFilteringByPriorities(arrayOfPriorities);
      window.sessionStorage.setItem("filteringByPriorities", JSON.stringify(arrayOfPriorities));
    } else {
      // if it is not checked add in the array
      const arrayOfPriorities = [...filteringByPriorities, priority];
      setFilteringByPriorities(arrayOfPriorities);
      window.sessionStorage.setItem("filteringByPriorities", JSON.stringify(arrayOfPriorities));
    }
  };

  return (
    <div className="bg-white absolute top-[60px] right-[0] left-[0] px-[30px] pt-[40px] pb-[20px] flex flex-col w-[100%] gap-[25px] rounded-[10px] border-[0.5px] border-[#8338EC]">
      <div className="flex flex-col gap-[22px] max-h-[200px] overflow-y-auto">
        {priorities.map((priority) => (
          <div key={priority.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(priority)}
              checked={filteringByPriorities.map(p => p.id).includes(priority.id)}
              id={priority.id}
            />
            <label className="ml-[15px]" htmlFor={priority.id}>
              {priority.name}
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
export default PrioritySelect;
