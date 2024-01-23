```javascript
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { updateTask, deleteTask } from '../utils/api';

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(GlobalContext);

  const handleStatusChange = async () => {
    const updatedTask = { ...task, completed: !task.completed };
    const response = await updateTask(updatedTask);
    dispatch({ type: 'UPDATE_TASK', payload: response.data });
  };

  const handleDelete = async () => {
    await deleteTask(task._id);
    dispatch({ type: 'DELETE_TASK', payload: task._id });
  };

  return (
    <div className="taskItem">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleStatusChange}>
        {task.completed ? 'Mark as Pending' : 'Mark as Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
```