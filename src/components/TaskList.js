```javascript
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TaskItem from './TaskItem';
import { getTasks } from '../utils/api';

const TaskList = () => {
  const { tasks, setTasks } = useContext(GlobalContext);

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks));
  }, []);

  return (
    <div id="taskList">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
```