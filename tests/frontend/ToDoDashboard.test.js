```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToDoDashboard from '../../src/components/ToDoDashboard';

describe('ToDoDashboard', () => {
  it('renders without crashing', () => {
    render(<ToDoDashboard />);
  });

  it('displays task list', () => {
    const { getByTestId } = render(<ToDoDashboard />);
    const taskList = getByTestId('taskList');
    expect(taskList).toBeInTheDocument();
  });

  it('displays add task form', () => {
    const { getByTestId } = render(<ToDoDashboard />);
    const addTaskForm = getByTestId('taskForm');
    expect(addTaskForm).toBeInTheDocument();
  });

  it('allows task creation', () => {
    const { getByTestId } = render(<ToDoDashboard />);
    const addTaskForm = getByTestId('taskForm');
    const taskInput = getByTestId('taskInput');
    const taskSubmitButton = getByTestId('taskSubmitButton');

    fireEvent.change(taskInput, { target: { value: 'New Task' } });
    fireEvent.click(taskSubmitButton);

    expect(addTaskForm).toHaveFormValues({ task: 'New Task' });
  });

  it('allows task deletion', async () => {
    const { getByTestId } = render(<ToDoDashboard />);
    const deleteButton = getByTestId('deleteButton');
    fireEvent.click(deleteButton);
    const taskItem = await getByTestId('taskItem');
    expect(taskItem).not.toBeInTheDocument();
  });
});
```