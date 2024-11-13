import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete, setTaskToEdit } from "../JS/TaskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={`p-4 my-2 border ${task.completed ? "bg-lightPurple" : "bg-palePurple"} flex flex-col  justify-between rounded-lg`}>
      <div>
        <h3 className="font-bold text-3xl text-center mb-5 text-white">{task.name}</h3>
        <div className="border h-60 border-gray-200 rounded-lg p-4 bg-paleRose-50 mb-5 flex flex-wrap">
          <p className="text-sm text-justify text-white">{task.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 p-0 justify-center   lg:justify-between md:justify-between sm:justify-between flex-col lg:flex-row md:flex-row sm:flex-row">
        <div className="flex items-center justify-between space-x-2   w-full lg:w-auto md:w-auto sm:w-auto">
          <button
            className="bg-darkRose text-white p-2 rounded-md w-1/2 text-center"
            onClick={() => dispatch(setTaskToEdit(task))}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded-md w-1/2 text-center"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            Delete
          </button>
        </div>
        <div className="flex items-center justify-between space-x-2  w-full lg:w-auto md:w-auto sm:w-auto">
          <button
            className={`py-2 px-3 ${task.isDone ? "bg-green-500" : "bg-gray-500"} m-auto rounded-md w-full  lg:w-auto md:w-auto sm:w-auto`}
            onClick={() => dispatch(toggleComplete(task.id))}
          >
            {task.isDone ? "✅" : "❌"}
          </button>
        </div>
      </div>

    </div>
  );
};

export default TaskItem;
