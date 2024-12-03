import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskFilters from './TaskFilters';
import TaskList from './TaskList';

const TaskDashboard = () => {
  const [filter, setFilter] = useState('all');
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <div className="container mx-auto p-9 bg-gray-600 h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Task Management Dashboard</h1>
      <TaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
      <TaskFilters setFilter={setFilter} />
      <TaskList filter={filter} />
    </div>
  );
};

export default TaskDashboard;
