const Task = ({ task }) => {
  return (
    <div className={`task task-${task.status.id}`}>
        <div className="flex justify-between">
            <div className="flex gap-[10px]">
                <span className="flex items-center gap-[4px] border-[0.5px] border-[#08A508] text-[12px] p-[4px] rounded-[5px] min-w-[86px]"><img src={task.priority.icon} alt="priority iocn" />{task.priority.name}</span>
                <span className="bg-[#FD9A6A] rounded-[15px] text-white min-w-[88px] py-[5px] px-[9px] text-center text-[12px]">მარკეტინგი</span>
            </div>
            <div>
                {task.due_date.split("T")[0]}
            </div>
        </div>
        
      <h3>Name: {task.name}</h3>
      <h3>Desc: {task.description}</h3>
      <h3>Employee: {task.employee.name}</h3>
      <h3>Priority: {task.priority.name}</h3>
      <h3>Due date: {task.due_date}</h3>
    </div>
  );
};
export default Task;
