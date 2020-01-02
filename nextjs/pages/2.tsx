import React from 'react';

interface Task {
  title: string;
}

interface TaskListProps {
  initialTasks: Task[];
}

interface TaskListState {
  tasks: Task[];
}

class TaskList extends React.Component<
  TaskListProps,
  TaskListState
> {
  constructor(props: TaskListProps) {
    super(props);
    this.state = {
      tasks: props.initialTasks
    };
    this.onAddNewTaskClick = this.onAddNewTaskClick.bind(this);
  }

  onAddNewTaskClick() {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { title: 'New Task' }
      ]
    });
  }
  render() {
    const { tasks } = this.state;
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
        <button onClick={this.onAddNewTaskClick}>Add new Task</button>
      </ul>
    )
  }
}

const tasks = [
  { title: 'tittle1' },
  { title: 'tittle2' },
  { title: 'tittle3' },
]

export default () => (
  <div>
    <TaskList initialTasks={tasks} />
  </div>
);
