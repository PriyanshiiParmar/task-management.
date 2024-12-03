import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from './tasksSlice';

const TaskForm = ({ taskToEdit, setTaskToEdit }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.dueDate);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      dispatch(updateTask({ id: taskToEdit.id, title, description, dueDate }));
    } else {
      dispatch(addTask({ title, description, dueDate }));
    }
    setTitle('');
    setDescription('');
    setDueDate('');
    setTaskToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit} className="p-10 bg-gray-200 w-1/3 m-auto rounded-lg shadow-md space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="w-full px-4 py-2 border rounded-lg"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="w-full px-4 py-2 border rounded-lg"
      ></textarea>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg"
        required
      />
      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
