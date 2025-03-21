import { useStatusesStore } from "../store/store";
import { changeTaskStatus } from "../API/changeTaskStatus";
import status_icon from "/src/assets/status-icon.svg";
import employee_icon from "/src/assets/user-icon.svg";
import calendar_icon from "/src/assets/calendar-icon.svg";

const SingleTask = ({ task }) => {

  const statuses = useStatusesStore(state => state.statuses);

  const handleChange = (e) => {
    console.log(e.target.value);
    changeTaskStatus(task.id, e.target.value);
  }
  
  
  return (
    <div>
      <div className="flex gap-[18px]">
        <span className={`task-priority task-priority-${task.priority.id}`}>
          <img src={task.priority.icon} alt="priority icon" />
          {task.priority.name}
        </span>
        <span className="department-badge department-badge-2">მარკეტინგი</span>
      </div>
      <h1 className="task-title">{task.name}</h1>
      <p className="task-description">{task.description}</p>
      <div className="mt-[60px] w-fit">
        <h3>დავალების დეტალები</h3>
        <div className="mt-[18px] flex items-center gap-[70px]">
          <div className="flex items-center gap-[5px] py-[15px]">
            <img src={status_icon} alt="status icon" />
            <span>სტატუსი</span>
          </div>
          <div>
            {/* Only rendering select element right after task is setted and status is known
                becouse otherwise defaultValue is not setted (we dont have access yet before fetching api)
                and defaultValue will be first option element always. Rendering it first and then 
                changing defaultValue is not working and is not updating UI. */}
            {task.status.id && (
              <select
                defaultValue={task.status.id}
                onChange={handleChange}
                className="border-2 rounded-lg"
                name=""
                id="">
                {statuses.map((status) => {
                  return (
                    <option key={status.id} value={status.id} id={status.id}>
                      {status.name}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
        </div>
        <div className="flex items-center gap-[70px]">
          <div className="flex items-center gap-[5px] py-[15px]">
            <img src={employee_icon} alt="employee icon" />
            <span>თანამშრომელი</span>
          </div>
          <div className="flex items-center gap-[50px] relative">
            <img
              src={task.employee.avatar}
              className="rounded-full w-[32px] h-[32px] object-cover"
              alt="employee avatar"
            />
            <p className="text-[14px]/[150%] tracking-[0%] font-[400] text-[#0D0F10]">
              {task.employee.name} {task.employee.surname}
            </p>
            <span className="absolute top-[-5px] right-0 text-nowrap font-[300] text-[#474747] text-[11px]/[100%] tracking-[0%]">
              დიზაინის დეპარტამენტი
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[70px]">
          <div className="flex items-center gap-[5px] py-[15px]">
            <img src={calendar_icon} alt="calendar icon" />
            <span>დავალების ვადა</span>
          </div>
          <div className="flex items-center gap-[50px] relative">
            {task.due_date.split("T")[0]}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleTask;
