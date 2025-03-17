import { Link } from "react-router";
import Status from "../components/Status";
import Task from "../components/Task";
import { statuses, tasks } from "../dummyData";

const Home = () => {
  return (
    <div className="Home pt-[40px]">
      <h1 className="page-title">დავალებების გვერდი</h1>
      <div className="flex gap-[50px] mt-[60px] justify-center">
        {statuses.map((status) => {
          return (
            <Status key={status.id} status={status}>
              {tasks.map((task) => {
                if (task.status.id === status.id) {
                  return (
                    <Link key={task.id} to={`/${task.id}`}>
                      <Task task={task} />
                    </Link>
                  );
                }
              })}
            </Status>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
