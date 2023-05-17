
// 2. Create an array of objects called `projects`. Each object should have keys called `name`, `client`, and `tasks`. The `tasks` key should be an array of task objects with properties `title`, `assignee`, `status`, and `dueDate`. Then, create the following functions:


const projects = [
    {
      name: 'Project 1',
      client: 'Client A',
      tasks: [
        {
          title: 'Task 1',
          assignee: 'Bob',
          status: 'Not Started',
          dueDate: '2023-05-20'
        },
        {
          title: 'Task 2',
          assignee: 'Alice',
          status: 'In Progress',
          dueDate: '2023-05-15'
        },
        {
          title: 'Task 3',
          assignee: 'Charlie',
          status: 'Complete',
          dueDate: '2023-05-10'
        }
      ]
    },
    {
      name: 'Project 2',
      client: 'Client B',
      tasks: [
        {
          title: 'Task 1',
          assignee: 'Alice',
          status: 'In Progress',
          dueDate: '2023-05-25'
        },
        {
          title: 'Task 2',
          assignee: 'Bob',
          status: 'Not Started',
          dueDate: '2022-06-01'
        }
      ]
    }
  ];

  function findOverdueTasks(projects, dueDate) {
    const overdueTasks = [];
    for (const project of projects) {
      for (const task of project.tasks) {
        if (task.dueDate < dueDate) {
          overdueTasks.push(task);
        }
      }
    }
    return overdueTasks;
  }
console.log(findOverdueTasks(projects, '2023-05-01'));
