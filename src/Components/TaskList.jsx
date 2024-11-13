import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import { setFilter, setDueDateFilter, setPriorityFilter } from "../JS/TaskSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasksState = useSelector((state) => state.tasks);
  const { tasks, filter, dueDateFilter, priorityFilter } = tasksState;

  const filteredTasks = tasks.filter((task) => {
    let isValid = true;
    if (filter === "Completed" && !task.isDone) isValid = false;
    if (filter === "Incomplete" && task.isDone) isValid = false;
    if (dueDateFilter && task.dueDate !== dueDateFilter) isValid = false;
    if (priorityFilter && task.priority !== priorityFilter) isValid = false;
    return isValid;
  });

  return (
    <div className={`m-0 py-10 px-10 ${filteredTasks.length === 0 ? "h-screen" : [1, 2, 3].includes(filteredTasks.length) ? "h-full" : "h-full"} bg-darkPurple`}>
      <h1 className="text-3xl font-bold text-center mb-6 bg-lightPurple p-4 rounded-lg text-darkRose w-full">
        To-Do List
      </h1>
      <TaskForm />
      <div className="flex gap-4 flex-col lg:flex-row md:flex-row sm:flex-row justify-center items-center self-center mb-4 bg-lightPurple p-4 mt-auto rounded-lg w-full">
        <select
          className="border p-2 rounded-lg w-full lg:w-auto md:w-auto sm:w-auto"
          onChange={(e) => dispatch(setFilter(e.target.value))}
          value={filter}
        >
          <option value="All">All Tasks</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
        <input
          type="date"
          className="border p-2 rounded-lg w-full lg:w-auto md:w-auto sm:w-auto"
          onChange={(e) => dispatch(setDueDateFilter(e.target.value))}
          value={dueDateFilter}
        />
        <select
          className="border p-2 rounded-lg w-full lg:w-auto md:w-auto sm:w-auto"
          onChange={(e) => dispatch(setPriorityFilter(e.target.value))}
          value={priorityFilter}
        >
          <option value="">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className={`bg-paleRose-75 p-5 rounded-lg ${tasks.length !== 0 ? "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" : "flex flex-col justify-center"}`}>
        {filteredTasks.length ? (
          filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p className="text-white text-center">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
