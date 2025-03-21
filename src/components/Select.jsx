import { useState } from "react";
import DepartmentSelect from "./DepartmentSelect";
import PrioritySelect from "./PrioritySelect";
import EmployeeSelect from "./EmployeeSelect";
import { useFilterStore } from "../store/store";

import arrow_icon from "/src/assets/arrow-icon.svg"


const Select = () => {
  const [selected, setSelected] = useState("");

  const clearFilters = useFilterStore(state => state.clearFilters);

  const filteredByDepartments = useFilterStore(
    (state) => state.filteredByDepartments
  );
  const filteredByPriorities = useFilterStore(
    (state) => state.filteredByPriorities
  );
  const filteredByEmployees = useFilterStore(
    (state) => state.filteredByEmployees
  );

  const showOptions = (choosedOption) => {
    if (selected === choosedOption) {
      setSelected("");
    } else {
      setSelected(choosedOption);
    }
  };

  return (
    <div className="mt-[50px] w-fit relative">
      <div className="flex gap-[45px] p-[10px] border-1 border-[#DEE2E6] w-fit rounded-[10px]">
        <div
          onClick={() => showOptions("department")}
          className={`flex gap-[8px] cursor-pointer hover:text-[#8338EC] ${
            selected === "department" && "text-[#8338EC]"
          }`}>
          <span>დეპარტამენტი</span>
          <img
            className="hover:fill-[#8338EC]"
            src={arrow_icon}
            alt="arrow icon"
          />
        </div>
        <div
          onClick={() => showOptions("priority")}
          className={`flex gap-[8px] cursor-pointer hover:text-[#8338EC] ${
            selected === "priority" && "text-[#8338EC]"
          }`}>
          <span>პრიორიტეტი</span>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
        <div
          onClick={() => showOptions("employee")}
          className={`flex gap-[8px] cursor-pointer hover:text-[#8338EC] ${
            selected === "employee" && "text-[#8338EC]"
          }`}>
          <span>თანამშრომელი</span>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>

      <div className="mt-[20px] flex gap-[20px] items-center">
        <div className="max-w-[600px] flex items-center gap-[5px] overflow-x-auto">
          {[
            ...filteredByDepartments,
            ...filteredByPriorities,
            ...filteredByEmployees,
          ]?.map((item) => (
            <span
              className="py-2 px-4 rounded-2xl border-[#DEE2E6] text-nowrap border-1"
              key={item.id}>
              {item.name + " "}
              {item.surname && item.surname}
            </span>
          ))}
        </div>
        {[
          ...filteredByDepartments,
          ...filteredByPriorities,
          ...filteredByEmployees,
        ].length > 0 && <button onClick={clearFilters} className="cursor-pointer">გასუფთავება</button>}
      </div>

      <div>
        {selected === "department" && (
          <DepartmentSelect setSelected={setSelected} />
        )}
        {selected === "priority" && (
          <PrioritySelect setSelected={setSelected} />
        )}
        {selected === "employee" && (
          <EmployeeSelect setSelected={setSelected} />
        )}
      </div>
    </div>
  );
};
export default Select;
