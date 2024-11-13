import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const initialState = {
  tasks: loadTasksFromLocalStorage(),
  taskToEdit: null,
  filter: "All",
  dueDateFilter: "",
  priorityFilter: "",
};

const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = { ...action.payload, id: Date.now(), isDone: false };
      state.tasks.push(newTask);
      saveTasksToLocalStorage(state.tasks);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex >= 0) {
        state.tasks[taskIndex] = { ...updatedTask, id };
        saveTasksToLocalStorage(state.tasks);
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
        saveTasksToLocalStorage(state.tasks);
      }
    },
    setTaskToEdit: (state, action) => {
      state.taskToEdit = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setDueDateFilter: (state, action) => {
      state.dueDateFilter = action.payload;
    },
    setPriorityFilter: (state, action) => {
      state.priorityFilter = action.payload;
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  toggleComplete,
  setTaskToEdit,
  setFilter,
  setDueDateFilter,
  setPriorityFilter,
} = TaskSlice.actions;

export default TaskSlice.reducer;
