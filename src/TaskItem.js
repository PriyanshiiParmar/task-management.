import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleteTask } from './tasksSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleComplete = () => {
    dispatch(toggleCompleteTask(task.id));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
        <p className="text-gray-500">Due: {task.dueDate}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleToggleComplete}
          className={`px-4 py-2 rounded-lg ${
            task.completed ? 'bg-green-500 text-white' : 'bg-gray-300'
          }`}
        >
          {task.completed ? 'Completed' : 'Mark as Completed'}
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
