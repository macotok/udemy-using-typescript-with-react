import React from 'react';

interface Task {
  title: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FunctionComponent<
  TaskListProps
>= ({ tasks }) => (
  <ul>
    {tasks.map((task, index) => (
      <li key={index}>{task.title}</li>
    ))}
  </ul>
);

const tasks = [
  { title: 'tittle1' },
  { title: 'tittle2' },
  { title: 'tittle3' }
];

export default () => (
  <div>
    <TaskList tasks={tasks} />
  </div>
);
