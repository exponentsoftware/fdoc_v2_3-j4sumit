
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
// 2-a. `findOverdueTasks` - Returns an array of tasks with a due date before a specified date.

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
// console.log(findOverdueTasks(projects, '2023-05-01'));


// b. `assignTaskToEmployee` - Assigns a task with a specified title to an employee with a given name, only if the employee and task exist.


function assignTaskToEmployee(projects, projectName, taskTitle, employeeName) {
    for (const project of projects) {
      if (project.name === projectName) {
        for (const task of project.tasks) {
          if (task.title === taskTitle) {
            task.assignee = employeeName;
            return; // Exit the function after assigning the task
          }
        }
      }
    
    }
    console.log('Project or task not found.'); // Or handle the error in an appropriate way
  }
//   assignTaskToEmployee(projects, 'Project 1', 'Task 1', 'Alice');
// console.log(projects)  

// c. `updateTaskStatus` - Updates a task's status in a specified project only if the task and project exist. This function should be able to update the task's status.


function updateTaskStatus(projects, projectName, taskTitle, newStatus) {
    for (const project of projects) {
      if (project.name === projectName) {
        for (const task of project.tasks) {
          if (task.title === taskTitle) {
            task.status = newStatus;
            return; 
          }
        }
      }
    }
  
    console.log('Project or task not found.'); 
  }
    

  updateTaskStatus(projects, 'Project 1', 'Task 1', 'In Progress');
  console.log(projects);