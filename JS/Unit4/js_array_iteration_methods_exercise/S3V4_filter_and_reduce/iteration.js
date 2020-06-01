const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 },
];

    // Result: { name: 'paper towels', price: 6.99 }
const under10 = products
  .filter(product => product.price < 10)
  .reduce((highest, product) => {
    if (highest.price > product.price){
    return highest
    }
    return product
  })

  console.log(under10)

  const over10 = products
  .filter(product => product.price > 10)
  .reduce((sum, product) => sum + product.price, 0)
  .toFixed(2)

  console.log(over10)



  const purchaseItems = [
    {
        name: 'apples',
        dept: 'groceries',
        price: 2.49
    },
    {
        name: 'bread',
        dept: 'groceries',
        price: 2.99
    },
    {
        name: 'batteries',
        dept: 'electronics',
        price: 5.80
    },
    {
        name: 'eggs',
        dept: 'groceries',
        price: 3.99
    },
    {
        name: 't-shirts',
        dept: 'apparel',
        price: 9.99
    }
];
let groceryTotal;

groceryTotal = purchaseItems
  .filter(item => item.dept === "groceries")
  .reduce((sum, product) => sum + product.price, 0)

console.log(groceryTotal)