import React from 'react';

const TaskFilters = ({ setFilter }) => {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <button onClick={() => setFilter('all')} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        All Tasks
      </button>
      <button onClick={() => setFilter('completed')} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        Completed Tasks
      </button>
      <button onClick={() => setFilter('pending')} className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
        Pending Tasks
      </button>
      <button onClick={() => setFilter('overdue')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
        Overdue Tasks
      </button>
    </div>
  );
};

export default TaskFilters;
