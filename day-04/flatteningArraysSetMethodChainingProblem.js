// জাভাস্ক্রিপ্টের flat() মেথড ব্যবহার করে খুব সহজেই গভীর বা জটিল অ্যারে থেকে ডেটা বের করে আনা যায়।

const nestedArray = [1, [2, 3], [4, [5]]];

const flattend = nestedArray.flat(Infinity);

console.log(flattend);

// রিয়েল প্রজেক্টে যখন API থেকে ডেটা আসে (যেমন: ক্যাটাগরির ভেতরে সাব-ক্যাটাগরি), তখন এটি দারুণ কাজে দেয়।

const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

// Unique Values (ডুপ্লিকেট রিমুভ করার দ্রুততম উপায়) সবচেয়ে ক্লিন এবং ফাস্ট উপায় হলো Set অবজেক্ট ব্যবহার করা, কারণ Set শুধুমাত্র ইউনিক ভ্যালু স্টোর করে।

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
  { name: "Monitor", price: 200 },
];

const processedData = products
  .filter((p) => p.price > 50) // ৫০ ডলারের বেশি দামি প্রোডাক্ট নিন
  .map((p) => ({ ...p, price: p.price * 120 })) // টাকা থেকে বিডিটি-তে কনভার্ট
  .sort((a, b) => b.price - a.price); // দাম অনুযায়ী বড় থেকে ছোট সাজান

// Method Chaining (ক্লিন কোড পাইপলাইন) চেইনিং করলে কোড অনেক বেশি রিডেবল হয়। নিচের উদাহরণে আমরা প্রথমে ডাটা ফিল্টার করব, তারপর ফরম্যাট করব এবং সবশেষে সর্ট করব।

console.log(processedData);

// Performance Check: forEach বনাম map ১ লক্ষ ডেটার ওপর এদের পারফরম্যান্স চেক করার জন্য আমরা console.time() ব্যবহার করতে পারি।

const bigData = new Array(100000).fill(1);

console.time("forEach");
bigData.forEach((item) => item + 1);
console.timeEnd("forEach");

// map Performance
console.time("map");
bigData.map((item) => item + 1);
console.timeEnd("map");

// map: এটি একটি নতুন অ্যারে রিটার্ন করে এবং মেমোরিতে জায়গা নেয়। যখন ডেটা ট্রান্সফর্ম করা দরকার তখন এটি ব্যবহার করা উচিত।

// forEach: এটি কোনো কিছু রিটার্ন করে না, শুধু লুপ চালায়। যখন শুধু সাইড-ইফেক্ট (যেমন: ডাটাবেজে সেভ করা বা লগ করা) দরকার, তখন এটি কার্যকর।

// Performance: বড় ডেটাসেটে অনেক সময় forEach সামান্য দ্রুত হতে পারে কারণ এটি নতুন অ্যারে তৈরি করার ঝামেলায় যায় না।
