/**
Filter: Cleaner Data Fetching
এটি কেবল ডেটা মোছার জন্য নয়, বরং সার্চ বা ক্যাটাগরি ফিল্টারিংয়ের জন্য মাস্ট।
কন্ডিশনের ওপর ভিত্তি করে ডেটা ছাঁটাই করা।

Task: একটি ই-কমার্স প্রোডাক্ট লিস্ট থেকে শুধুমাত্র "In Stock" এবং "Price < 500" এমন প্রোডাক্টগুলো আলাদা করুন।
*/

// -> data set 1

const products = [
  { id: 1, name: "T-Shirt", price: 450, stock: true },
  { id: 2, name: "Jeans", price: 1200, stock: true },
  { id: 3, name: "Socks", price: 150, stock: false },
  { id: 4, name: "Cap", price: 300, stock: true },
  { id: 5, name: "Belt", price: 600, stock: true },
];

// -> using filtering logic

// const filterProdcts = products.filter ()
// const filterProdcts = products.filter (product)
// const filterProdcts = products.filter (product =>)
// const filterProdcts = products.filter (product => {})
// const filterProdcts = products.filter (product => {
//     return
// })
const filterProdcts = products.filter((product) => {
  return product.stock === true && product.price < 500;
});

// -> যে আইটেমগুলো এই দুটি শর্তই পূরণ করবে, তারা filteredProducts নামক নতুন অ্যারেতে জমা হবে।

console.log(filterProdcts);

// -> .filter() method using destructuring

// const filterProdcts2 = products.filter ()
// const filterProdcts2 = products.filter (() =>)
// const filterProdcts2 = products.filter (({price, stock}) =>)
// const filterProdcts2 = products.filter (({price, stock}) =>{})
// const filterProdcts2 = products.filter (({price, stock}) =>{
// return
// })
const filterProdcts2 = products.filter(({ price, stock }) => {
  return stock === true && price < 500;
});

// -> alternative way

// const filterProdcts3 = products.filter (() => )
// const filterProdcts3 = products.filter (({stock, price}) => )
const filterProdcts3 = products.filter(
  ({ stock, price }) => stock && price < 500,
);

// -> changing the property name

const filterProdcts4 = products.filter(
  ({ stock: s_tock, price: p_rice }) => s_tock && p_rice < 500,
);

// output

console.log(filterProdcts2);
console.log(filterProdcts3);
console.log(filterProdcts4);
