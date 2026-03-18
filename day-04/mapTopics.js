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

/**
 * ইন্ডাস্ট্রি লেভেলে map() মেথডটি তখনই ব্যবহার করা উচিত যখন আপনার কাছে একটি অ্যারে (Array) আছে এবং আপনি সেই অ্যারের প্রতিটি উপাদানের ওপর কোনো কাজ চালিয়ে ঠিক সমপরিমাণ উপাদান বিশিষ্ট একটি নতুন অ্যারে তৈরি করতে চান।

নিচে ৪টি প্রধান পরিস্থিতি দেওয়া হলো যখন আপনার map ব্যবহার করা উচিত:

১. ডেটা ফরম্যাট পরিবর্তন করতে (Data Transformation)
সবচেয়ে বেশি ব্যবহৃত হয় যখন আপনার কাছে সার্ভার থেকে আসা এক ধরনের ডেটা আছে, কিন্তু আপনার অ্যাপ্লিকেশনে দেখানোর জন্য অন্য ফরম্যাটে দরকার। যেমন: নামগুলো সব ছোট হাতের অক্ষরে আছে, আপনি সেগুলো বড় হাতের করে একটি নতুন লিস্ট চান।

২. অবজেক্ট থেকে নির্দিষ্ট প্রপার্টি আলাদা করতে (Extracting Properties)
ধরুন আপনার কাছে ১০০ জন ইউজারের একটি ফুল অবজেক্ট লিস্ট আছে, কিন্তু আপনার শুধু তাদের Email ID গুলোর একটি আলাদা লিস্ট দরকার। এই ক্ষেত্রে মূল অ্যারেকে প্রসেস করে শুধু ইমেইলগুলোর একটি নতুন অ্যারে বানাতে map সেরা।

৩. UI কম্পোনেন্ট রেন্ডার করতে (Rendering UI)
আপনি যখন আধুনিক ফ্রেমওয়ার্ক (যেমন: React) ব্যবহার করবেন, তখন একটি ডেটা লিস্ট থেকে এইচটিএমএল (HTML) এলিমেন্ট বা কার্ড তৈরি করার জন্য map অপরিহার্য। এটি প্রতিটি ডেটার জন্য একটি করে নতুন UI এলিমেন্ট রিটার্ন করে।

৪. ক্যালকুলেশন করে নতুন মান বসাতে (Applying Logic)
ধরুন আপনার কাছে পণ্যের দামের একটি তালিকা আছে এবং আপনি চাচ্ছেন সবগুলোর ওপর ১০% ডিসকাউন্ট দিয়ে নতুন দামের একটি লিস্ট তৈরি করতে। অরিজিনাল লিস্ট ঠিক রেখে নতুন ডিসকাউন্টেড লিস্ট পেতে map ব্যবহার করা হয়।
 */
