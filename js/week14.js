// problem 1
let sam = {
  name: 'Sam',
  department: 'tech',
  designation: 'manager',
  salary: 40000,
  raise: true,
};

let mary = {
  name: 'Mary',
  department: 'fiance',
  designation: 'trainee',
  salary: 18500,
  raise: true,
};

let  bill = {
  name: 'Bill',
  department: 'HR',
  designation: 'Executive',
  salary: 21200,
  raise: true,
};

console.log('problem 1',sam, mary, bill);

// problem 2

const company = {
  companyName: 'Tech Stars'
  website: "www.techstars.site"
  employees: [sam, mary, bill]
}
console.log ('problem 2', company);

// problem 3
let  anna = {
  name: 'Anna',
  department: 'Tech',
  designation: 'Executive',
  salary: 25600,
  raise: false,
};
company.employees.push(anna);
console.log('problem 3, company');

// problem 4
let sum = 0;
for (var i = 0; i < company.employees.length, i++) {
sum += company.employees[i].salary;
}
console.log('Problem 4', sum);

// problem 5
function increaseBy10(num) {
  return num * 1.1;
}
for (var i = 0; i < company.employees.length, i++) {
  if (company.employees[i].raise) {
    // increase salary
company.employees[i].salary *= 1.1;
    // reset raise
    company.employees[i].raise = false;
}
}
console.log('problem 5', company);

// problem 6
const peopleWFH = ['Anna', 'Sam'];
for (var i = 0; i < company.employees.length, i++) {
  if (peopleWFH.includes(company.employees[i].name)) {
    company.employees[i].wfh = true;
  } else {
    company.employees[i].wfh = false; 
  }
}
const.log('Problem 6', company);
