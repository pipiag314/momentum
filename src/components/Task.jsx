const Task = ({ task }) => {
  return (
    <div className={`task task-${task.status.id}`}>
      <div className="flex justify-between">
        <div className="flex gap-[10px]">
          <span className={`task-priority task-priority-${task.priority.id}`}>
            <img src={task.priority.icon} alt="priority icon" />
            {task.priority.name}
          </span>
          <span className="departament-badge departament-badge-2">
            მარკეტინგი
          </span>
        </div>
        <div className="text-nowrap">{task.due_date.split("T")[0]}</div>
      </div>
      <div>
        <h3>{task.name}</h3>
        <p className="mt-[12px]">{task.description}</p>
      </div>
      <div className="flex justify-between">
        <img src={task.employee.avatar} width={32} height={32} className="rounded-full" alt="emploee avatar" />
        <div className="flex items-center gap-[4px]">
          <img src="./src/assets/comments-icon.svg" alt="comment icon" />
          <span>{task.total_comments}</span>
        </div>
      </div>
    </div>
  );
};
export default Task;
