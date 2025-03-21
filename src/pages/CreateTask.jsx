import { useEffect } from "react";
import {
  useDepartmentsStore,
  useEmployeesStore,
  useFilterStore,
  usePrioritiesStore,
  useStatusesStore,
} from "../store/store";
import { useForm } from "react-hook-form";
import { createNewTask } from "../API/createNewTask";
import { useNavigate } from "react-router";

const CreateTask = () => {
  const employees = useEmployeesStore((state) => state.employees);
  const departments = useDepartmentsStore((state) => state.departments);
  const priorities = usePrioritiesStore((state) => state.priorities);
  const statuses = useStatusesStore((state) => state.statuses);
  const clearFilters = useFilterStore((state) => state.clearFilters);

  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data) => {
    console.log(data);

    try {
      await createNewTask(data.name, data.description, data.date, data.status, data.employee, data.priority);
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/");
    }
  };

  useEffect(() => {
    // first clear all filters when this page component mounts
    clearFilters();
  }, []);
  return (
    <div className="">
      <h1>შექმენი ახალი დავალება</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="mt-[25px] p-[55px] flex flex-col gap-[50px] rounded-[4px] border-[0.3px] border-[#DDD2FF] bg-[#FBF9FFA6]">
        <div className="flex gap-[160px]">
          <div className="flex flex-col gap-[55px]">
            <div className="input-box">
              <label htmlFor="title">სათაური*</label>
              <input
                {...register("name", {
                  required: { value: true, message: "სათაური აუცილებელია" },
                  minLength: { value: 2, message: "მინიმუმ 2 სიმბოლო" },
                  maxLength: { value: 255, message: "მაქსიმუმ 255 სიმბოლო" },
                })}
                className=""
                type="text"
                id="title"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">აღწერა</label>
              <textarea
                {...register("description")}
                className="w-fit border-1 border-[#DEE2E6] bg-[#fff] resize-none rounded-[5px]"
                cols="45"
                rows="10"></textarea>
            </div>

            <div className="flex gap-[32px] w-[380px]">
              <div className="flex flex-col flex-1">
                <label htmlFor="">პრიორიტეტი*</label>
                <select
                  {...register("priority", {
                    required: { value: true, message: "სათაური აუცილებელია" },
                  })}
                  className="w-[100%] border-1 border-[#CED4DA] rounded-[5px] h-[45px]">
                  <option value="">- - -</option>
                  {priorities.map((priority) => (
                    <option key={priority.id} value={priority.id}>
                      {priority.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="">სტატუსი*</label>
                <select
                  {...register("status", {
                    required: { value: true, message: "სათაური აუცილებელია" },
                  })}
                  className="w-[100%] border-1 border-[#CED4DA] bg-white rounded-[5px] h-[45px]">
                  <option value="">- - -</option>
                  {statuses.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <dir>
            <div className="flex flex-col">
              <label htmlFor="">დეპარტამენტი*</label>
              <select
                {...register("department", {
                  required: { value: true, message: "სათაური აუცილებელია" },
                })}
                className="w-[100%] border-1 border-[#CED4DA] bg-white rounded-[5px] h-[45px]">
                <option value="">- - -</option>
                {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mt-[60px]">
              <label htmlFor="">პასუხისმგებელი თანამშრომელი*</label>
              <select
                {...register("employee", {
                  required: { value: true, message: "სათაური აუცილებელია" },
                })}
                className="w-[100%] border-1 border-[#CED4DA] bg-white rounded-[5px] h-[45px]">
                <option value="">- - -</option>
                {employees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name} {employee.surname}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col mt-[160px]">
              <label htmlFor="deadline">დედლაინი</label>
              <input
                {...register("date", {
                  required: { value: true, message: "სათაური აუცილებელია" },
                })}
                type="date"
                id="deadline"
                className="w-[320px] border-1 border-[#CED4DA] bg-white rounded-[5px] h-[45px]"
              />
            </div>
          </dir>
        </div>
        <button
          type="submit"
          className="self-center header-btn header-primary-btn">
          დავალების შექმნა
        </button>
      </form>
    </div>
  );
};
export default CreateTask;
