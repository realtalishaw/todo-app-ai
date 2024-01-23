```javascript
import React, { useState } from 'react';
import { createTask } from '../utils/api';

const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && description) {
      const task = { title, description };
      await createTask(task);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} id="taskForm">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
```