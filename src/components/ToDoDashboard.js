```javascript
import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import NavigationBar from './NavigationBar';
import { getTasks } from '../utils/api';

const ToDoDashboard = () => {
  const { setTasks } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
      setLoading(false);
    };

    fetchTasks();
  }, [setTasks]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavigationBar />
      <AddTaskForm />
      <TaskList />
    </div>
  );
};

export default ToDoDashboard;
```