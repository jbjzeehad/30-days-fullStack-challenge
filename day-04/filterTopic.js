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

/**
 * ইন্ডাস্ট্রি লেভেলে filter() মেথডটি তখনই ব্যবহার করা উচিত যখন আপনার কাছে একটি বড় ডেটা সেট বা লিস্ট আছে এবং আপনি সেখান থেকে নির্দিষ্ট কিছু শর্ত (Condition) পূরণ করে এমন উপাদানগুলোকে আলাদা করে একটি ছোট বা নতুন অ্যারে তৈরি করতে চান।

নিচে ৫টি প্রধান পরিস্থিতি দেওয়া হলো যখন আপনার filter ব্যবহার করা উচিত:

১. নির্দিষ্ট ক্রাইটেরিয়ার ডেটা খুঁজতে (Searching/Filtering)
সবচেয়ে কমন ব্যবহার হলো সার্চ ফাংশনালিটি। ধরুন আপনার কাছে অনেকগুলো প্রোডাক্ট আছে, ইউজার চাচ্ছে শুধু "Electronics" ক্যাটাগরির প্রোডাক্টগুলো দেখতে। এই যে নির্দিষ্ট শর্ত দিয়ে বাকিগুলোকে বাদ দেওয়া, এটাই ফিল্টারের কাজ।

২. ডিলিট অপারেশন সিমুলেট করতে (Removing an Item)
ইন্ডাস্ট্রিতে (বিশেষ করে React-এ) কোনো লিস্ট থেকে একটি আইটেম রিমুভ করার জন্য filter সবচেয়ে বেশি ব্যবহৃত হয়। ধরুন, আপনি একটি আইটেমের 'Delete' বাটনে ক্লিক করলেন; তখন ওই আইটেমের id বাদে বাকি সব আইটেমকে ফিল্টার করে নতুন একটি লিস্ট তৈরি করা হয়।

৩. ইনভ্যালিড বা খালি ডেটা পরিষ্কার করতে (Data Cleaning)
সার্ভার থেকে অনেক সময় অসম্পূর্ণ ডেটা আসে (যেমন কোনো ইউজারের ইমেইল নেই বা নাম null)। অ্যাপ্লিকেশনে দেখানোর আগে এই 'নাল' বা 'আনডিফাইন্ড' ভ্যালুগুলোকে লিস্ট থেকে ছেঁটে ফেলার জন্য filter ব্যবহার করা হয়।

৪. পারমিশন বা অ্যাক্সেস কন্ট্রোল (Access Control)
ইউজার লিস্ট থেকে শুধু "Admin" ইউজারদের আলাদা করা বা যারা সাবস্ক্রিপশন ফি দিয়েছে শুধু তাদের আলাদা করার মতো কাজের ক্ষেত্রে এটি ব্যবহার করা হয়।

৫. চেকিং বা ভ্যালিডেশন (Conditional Logic)
ধরুন আপনার একটি স্টুডেন্ট লিস্ট আছে, আপনি শুধু তাদের চাচ্ছেন যারা পরীক্ষায় পাস করেছে (মার্কস ৩৩ এর বেশি)। এই ধরনের কন্ডিশনাল লজিক অ্যাপ্লাই করে নতুন লিস্ট পেতে এটি সেরা।
 */
