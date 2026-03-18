/**
Reduce: The Swiss Army Knife
সবচেয়ে শক্তিশালী মেথড। reduce মেথডকে আসলেই জাভাস্ক্রিপ্টের "সুইস আর্মি নাইফ" বলা হয় কারণ এটি একটি অ্যারে থেকে যেকোনো ধরনের আউটপুট (যেমন: নাম্বার, অবজেক্ট বা অন্য কোনো অ্যারে) তৈরি করতে পারে।

Problem Solving: আপনার কাছে একগুচ্ছ ট্রানজেকশন ডেটা আছে। reduce ব্যবহার করে সেগুলোকে 'Income' এবং 'Expense' ক্যাটাগরিতে গ্রুপ করে একটি অবজেক্ট তৈরি করুন। 
*/

// -> data 01

const transactions = [
  { amount: 500, type: "Income" },
  { amount: 200, type: "Expense" },
  { amount: 1000, type: "Income" },
  { amount: 150, type: "Expense" },
  { amount: 300, type: "Income" },
];

// const groupedData = transactions.reduce ()

// const groupedData = transactions.reduce (()=>)

// const groupedData = transactions.reduce (()=>{})

// const groupedData = transactions.reduce ((accumulator, current)=>{})

// const groupedData = transactions.reduce ((accumulator, current)=>{const {type, amount} =current;})

const groupedData = transactions.reduce((accumulator, current) => {
  const { type, amount } = current;

  if (!accumulator[type]) {
    accumulator[type] = 0;
  }
  accumulator[type] += amount;

  return accumulator;
}, {});

console.log(groupedData);

/**  -> আপনার কাছে এই ফলের লিস্টটি আছে: ['Apple', 'Orange', 'Apple', 'Banana', 'Orange', 'Apple'] আপনি আউটপুট চান এমন একটি অবজেক্ট: { Apple: 3, Orange: 2, Banana: 1 }
 */

const fruits = ["Apple", "Orange", "Apple", "Banana", "Orange", "Apple"];

const fruitCount = fruits.reduce((basket, currentFruit) => {
  if (basket[currentFruit]) {
    basket[currentFruit] += 1;
  } else {
    basket[currentFruit] = 1;
  }
  return basket;
}, {});

console.log(fruitCount);

/**
বের করতে হবে কোন গ্রেড কয়জন স্টুডেন্ট পেয়েছে
 */

// -> data 03

const students = [
  { name: "Abir", grade: "A" },
  { name: "Sara", grade: "B" },
  { name: "Kalam", grade: "A" },
  { name: "Nipa", grade: "C" },
  { name: "Rony", grade: "B" },
  { name: "Mitu", grade: "A" },
];

const resultofStudents = students.reduce((list, currentStudentgrade) => {
  const { grade } = currentStudentgrade;
  if (!list[grade]) {
    list[grade] = 0;
  }
  list[grade] += 1;

  return list;
}, {});

console.log(resultofStudents);

// -> পুরো কার্টের মোট খরচ (Grand Total) বের করতে হবে।

const cart = [
  { item: "Laptop", price: 80000, quantity: 1 },
  { item: "Mouse", price: 1200, quantity: 2 },
  { item: "Keyboard", price: 2500, quantity: 1 },
  { item: "Monitor", price: 15000, quantity: 2 },
];

const carttotalprice = cart.reduce((total, currentitem) => {
  const { price, quantity } = currentitem;

  const itemtotal = price * quantity;

  return total + itemtotal;
}, 0);

console.log(carttotalprice);

// -> বের করতে হবে ২,০০০ টাকার নিচের আইটেমগুলোর মোট দাম কত?

const marketList = [
  { item: "Rice", price: 1200 },
  { item: "Oil", price: 2400 },
  { item: "Fish", price: 800 },
  { item: "Meat", price: 3000 },
  { item: "Spices", price: 500 },
];

const totalPricemoney = marketList.reduce((totalPrice, currentItem) => {
  const { price } = currentItem;

  if (price < 2000) {
    totalPrice += price;
  }

  return totalPrice;
}, 0);

console.log(totalPricemoney);

// -> প্রতিটি ডিপার্টমেন্টে মোট কত টাকা বেতন দিতে হচ্ছে।

const employees = [
  { name: "Abir", dept: "Engineering", salary: 50000 },
  { name: "Sara", dept: "Marketing", salary: 40000 },
  { name: "Kalam", dept: "Engineering", salary: 60000 },
  { name: "Nipa", dept: "HR", salary: 35000 },
  { name: "Rony", dept: "Marketing", salary: 45000 },
];

// const totalSalary = employees.reduce ()
// const totalSalary = employees.reduce ((total, department)=>{},{})
const totalSalary = employees.reduce((salaryList, department) => {
  const { dept, salary } = department;

  if (!salaryList[dept]) {
    salaryList[dept] = 0;
  }

  salaryList[dept] += salary;

  return salaryList;
}, {});

console.log(totalSalary);
