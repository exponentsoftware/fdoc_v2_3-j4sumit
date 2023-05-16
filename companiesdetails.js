// Create a function that takes an array of `companies` as input. Each company object contains a name, an array of employee objects, and a nested object representing departments. Employee objects have a name, role, and department. The function should return a new array of companies with the same structure but with an additional property `numEmployees` and a modified `departments` object containing an array of department names and the number of employees in each department.

// ```js
const companies = [
    {
        name: 'Company 1',
        employees: [
            { name: 'Alice', role: 'Developer', department: 'Engineering' },
            { name: 'Bob', role: 'Manager', department: 'Engineering' },
            { name: 'Charlie', role: 'Designer', department: 'Design' },
        ],
    },
    {
        name: 'Company 2',
        employees: [
            { name: 'Sumit', role: 'Manager', department: 'Engineering' },
            { name: 'Amit', role: 'Designer', department: 'Design' },
            { name: 'Sajay', role: 'Developer', department: 'Engineering' },
        ],
    },
    {
        name: 'Company 3',
        employees: [
            { name: 'Vinod', role: 'Designer', department: 'Design' },
            // { name: 'Pramod', role: 'Manager', department: 'Engineering' },
            { name: 'Subodh', role: 'Developer', department: 'Engineering' },
        ],
    }
];


function processCompanies(companies) {
   return companies.map((company) => {
        const numofemployee = company.employees.length;

        const departments = company.employees.reduce((deptCounts, employee) => {
            const department = employee.department;
            if (deptCounts.hasOwnProperty(department)) {
              deptCounts[department]++;
            } else {
              deptCounts[department] = 1;
            }
            return deptCounts;
          }, {});

        return {...company, numofemployee,departments};
    })
}
console.log(processCompanies(companies));

