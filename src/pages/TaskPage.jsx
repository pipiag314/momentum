import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleTask } from "../API/getSingleTask";
import SingleTask from "../components/SingleTask";
import { useCommentsStore, useFilterStore } from "../store/store";
import TaskComment from "../components/TaskComment";
import { getAllComments } from "../API/getAllComments";

const TaskPage = () => {
  const setComments = useCommentsStore(state => state.setComments);
  const clearFilters = useFilterStore(state => state.clearFilters);

  const params = useParams(null);
  const [task, setTask] = useState({
    name: null,
    surname: null,
    description: null,
    due_date: "",
    status: {
      id: null,
      name: "",
    },
    priority: { name: null, id: null },
    employee: {
      avatar: null,
      name: null,
    },
  });

  useEffect(() => {
    // first clear all filters when this page component mounts
    clearFilters();
    
    
    async function getData() {
      const task = await getSingleTask(params.id);
      const comments_data = await getAllComments(params.id);
      setTask(task);
      setComments(comments_data);
    }
    getData();

    return () => {
      setComments([]);
    }
    
  }, []);

  return (
    <div className="pt-[40px] flex">
      <div className="flex-1">
        <SingleTask task={task} />
      </div>
      <div className="flex-1 py-[20px] pl-[200px]">
        <TaskComment task={task} />
      </div>
    </div>
  );
};
export default TaskPage;
