/** 
Map: Data Transformation
ইন্ডাস্ট্রিতে map ব্যবহার হয় মূলত এপিআই থেকে আসা র ডেটাকে (raw data) ফ্রন্টএন্ডে দেখানোর উপযোগী করে সাজাতে।
ডেটা ট্রান্সফর্ম করা (নতুন অ্যারে রিটার্ন করে)।

Task: একটি অবজেক্ট অ্যারে থেকে শুধু নির্দিষ্ট কিছু প্রপার্টি নিয়ে নতুন অ্যারে তৈরি করুন।
*/

//-> data set 1

const users = [
  { id: 1, name: "Abir", email: "abir@example.com", city: "Dhaka" },
  { id: 2, name: "Sumi", email: "sumi@example.com", city: "Chittagong" },
  { id: 3, name: "Rafiq", email: "rafiq@example.com", city: "Sylhet" },
];

//-> .map() method using array function

const simplifiedUsers = users.map((user) => {
  return {
    id: user.id,
    name: user.name,
  };
});

console.log(simplifiedUsers);

//-> .map() method using destructuring

const simplifiedUsers2 = users.map(({ id, name }) => ({
  id,
  name,
}));

console.log(simplifiedUsers2);

//-> data set 2

const products = [
  {
    id: 101,
    title: "Laptop",
    price: 75000,
    description: "High performance",
    rating: 4.5,
  },
  {
    id: 102,
    title: "Phone",
    price: 25000,
    description: "Good camera",
    rating: 4.2,
  },
  {
    id: 103,
    title: "Watch",
    price: 5000,
    description: "Waterproof",
    rating: 4.8,
  },
];

// const pricePoperty = products.map()
// const pricePoperty = products.map(()=>)
// const pricePoperty = products.map(()=>())
// const pricePoperty = products.map(({})=>())
// const pricePoperty = products.map(({})=>({}))
// const pricePoperty = products.map(({title, price})=>({}))
// const pricePoperty = products.map(({title, price})=>({title, price}))
const pricePoperty = products.map(({ title, price }) => ({ title, price }));

//-> alternative way

const pricePoperty2 = products.map(({ title, price }) => {
  return {
    title,
    price,
  };
});

//-> changing the property name

// const pricePoperty3 = products.map()
// const pricePoperty3 = products.map(()=>)
// const pricePoperty3 = products.map(({})=>)
// const pricePoperty3 = products.map(({title, price})=>)
// const pricePoperty3 = products.map(({title: productName, price: cost})=>)
// const pricePoperty3 = products.map(({title: productName, price: cost})=>())
// const pricePoperty3 = products.map(({title: productName, price: cost})=>({}))

const pricePoperty3 = products.map(({ title: productName, price: cost }) => ({
  productName,
  cost,
}));

// Output

console.log(pricePoperty);
console.log(pricePoperty2);
console.log(pricePoperty3);
