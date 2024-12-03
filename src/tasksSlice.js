import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        dueDate: action.payload.dueDate,
        completed: false,
      };
      state.items.push(newTask);
    },
    updateTask: (state, action) => {
      const index = state.items.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
    toggleCompleteTask: (state, action) => {
      const index = state.items.findIndex(task => task.id === action.payload);
      if (index !== -1) {
        state.items[index].completed = !state.items[index].completed;
      }
    },
  },
});

export const { addTask, updateTask, deleteTask, toggleCompleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
