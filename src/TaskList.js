import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = ({ filter }) => {
  const tasks = useSelector((state) => state.tasks.items);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    if (filter === 'overdue') return new Date(task.dueDate) < new Date() && !task.completed;
    return true;
  });

  return (
    <div className="space-y-4 w-1/2 m-auto">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
