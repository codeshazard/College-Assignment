// Xreate an inventory management function called filterByMap that acts as a search system or a store catalog. The function takes thress parameters: an array of item objects a category string to filter by and a maxPrice number contraint . It must return only the items that match the exact category and cost less than or equal to themaximum price

const items = [
  { name: "Laptop", category: "Electronics", price: 50000 },
  { name: "Phone", category: "Electronics", price: 30000 },
  { name: "Shirt", category: "Clothing", price: 1500 },
  { name: "Shoes", category: "Clothing", price: 2500 },
];

const result = filterByMap(items, "Electronics", 40000);
console.log(result);

function filterByMap(items, category, maxPrice) {
  let result = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].category === category && items[i].price <= maxPrice) {
      result.push(items[i]);
    }
  }
  return result;
}

// Write a function called processGrades that accepts an array of student objects . Each object has a name and an array of numeric scores . THe function shoudl return a new array of objects containin each student's name their calculated average score and a passed status (tru if the average score is 70 or above, false otherwise)

const students = [
  { name: "Shivam", scores: [80, 75, 90] },
  { name: "Rahul", scores: [60, 65, 70] },
  { name: "Aman", scores: [90, 85, 95] },
];

console.log(processGrades(students));

function processGrades(students) {
  let result = [];

  for (let i = 0; i < students.length; i++) {
    let total = 0;

    for (let j = 0; j < students[i].scores.length; j++) {
      total += students[i].scores[j];
    }

    let average = total / students[i].scores.length;

    result.push({
      name: students[i].name,
      average: average,
      passed: average >= 70,
    });
  }

  return result;
}

//Create a function calculatedTotal that takes an array of product objects and returns the total cost of all items in the cart . Each product object will look like this : {name: 'Laptop', price: 999, quantity: 1}

const cart = [
  { name: "Laptop", price: 999, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 },
  { name: "Keyboard", price: 50, quantity: 1 },
];

console.log(calculatedTotal(cart));

function calculatedTotal(products) {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
  }

  return total;
}
