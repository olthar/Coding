const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
];

const flatMovies = movies.reduce((arr, innerMovies) => [...arr, ...innerMovies],[])
console.log(flatMovies)


const users = [
  {
    name: 'Samir',
    age: 27,
    favoriteBooks:[
      {title: 'The Iliad'},
      {title: 'The Brothers Karamazov'}
    ]
  },
  {
    name: 'Angela',
    age: 33,
    favoriteBooks:[
      {title: 'Tenth of December'},
      {title: 'Cloud Atlas'},
      {title: 'One Hundred Years of Solitude'}
    ]
  },
  {
    name: 'Beatrice',
    age: 42,
    favoriteBooks:[
      {title: 'Candide'}
    ]
  }
];

const userTitles = users
  .map(user => user.favoriteBooks.map(book => book.title))
  .reduce((arr, titles) => [...arr, ...titles],[])

console.log(userTitles);



const customerNames = [
  [ "John", "Sandy", "Tyrone", "Elizabeth", "Penny" ],
  [ "Barry", "Wanda", "Jamal", "Hayden" ],
  [ "Portia", "Pam", "Philip" ]
];
let flattenedCustomerNames;

flattenedCustomerNames = customerNames.reduce((arr, names) => [...arr, ...names],[])

console.log(flattenedCustomerNames);


const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"]
    }
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"]
    }
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"]
    }
  }
];
let hobbies;

hobbies = customers
  .map(customer => customer.personal.hobbies)
  .reduce((arr, hobbies) => [...arr, ...hobbies],[])

console.log(hobbies);