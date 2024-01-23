```javascript
import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  tasks: [],
  user: null,
  error: null,
};

// Create context
export const GlobalContext = createContext(initialState);

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.payload,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Actions
  const setUser = (user) => {
    dispatch({
      type: 'SET_USER',
      payload: user,
    });
  };

  const setTasks = (tasks) => {
    dispatch({
      type: 'SET_TASKS',
      payload: tasks,
    });
  };

  const addTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      payload: task,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id,
    });
  };

  const setError = (error) => {
    dispatch({
      type: 'SET_ERROR',
      payload: error,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        tasks: state.tasks,
        error: state.error,
        setUser,
        setTasks,
        addTask,
        deleteTask,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
```