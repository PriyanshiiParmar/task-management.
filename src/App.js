import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import TaskDashboard from './TaskDashboard';
import TaskDetails from './TaskDetails';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/tasks" element={<TaskDashboard />} />
          <Route path="/" element={<TaskDashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
