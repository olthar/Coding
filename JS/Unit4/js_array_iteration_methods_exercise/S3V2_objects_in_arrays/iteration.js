const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 31},
  {name: 'Beatrice', age: 29}
];

const newUsers = users.filter(user => user.name !== "Samir")
console.log(newUsers)

const usersObjects = users.reduce((usersObject, user) => {
  usersObject[user.name] = user.age
  return usersObject
}, {})
console.log(usersObjects)

const userAge = users.map(user => `${user.name} is ${user.age} years old.`)

console.log(userAge)

const authors = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// Write your code below

fullAuthorNames = authors.map(author => `${author.firstName} ${author.lastName}`)
console.log(fullAuthorNames)


const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
const users2 = userNames
  .filter(user => user[0] === "S")
  .map(user => ({user}))
console.log(users2)

const users3 = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42},
  {name: 'Shaniqua', age: 30},
  {name: 'Marvin', age: 23},
  {name: 'Sean', age: 47}
];

const names = users3
  .filter(user => user["age"] >= 30)
  .map(user => ({user}))
console.log(names)


const todos = [
  {
      todo: 'Buy apples',
      done: false
  },
  {
      todo: 'Wash car',
      done: true
  },
  {
      todo: 'Write web app',
      done: false
  },
  {
      todo: 'Read MDN page on JavaScript arrays',
      done: true
  },
  {
      todo: 'Call mom',
      done: false
  }
];
let unfinishedTasks;

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below
unfinished =  todos
  .filter(todo => todo.done === false)
  .map(todo => todo.todo)
console.log(unfinished)