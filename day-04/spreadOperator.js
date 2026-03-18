/** Spread Operator (...) দিয়ে কপি ও নতুন আইটেম যোগ করা
Spread operator ব্যবহার করে আমরা খুব সহজেই একটি অ্যারেকে কপি করতে পারি এবং অরিজিনাল অ্যারে ঠিক রেখেই নতুন ডেটা যোগ করতে পারি।
*/

const numbers = [1, 2, 3];

// const newNumbers = [...numbers]; -> copy
const newNumbers = [...numbers, 4, 5, 6]; // new item add korchi

console.log(numbers); // original array -> no change
console.log(newNumbers);

// -> alternative way

const numbers2 = [1, 2, 3];
const newNumbers2 = [4, 5, 6];

const numberList2 = [...numbers2, ...newNumbers2];

console.log(numbers2);
console.log(numberList2);

// অবজেক্টের ক্ষেত্রে Spread Operator (...) ইন্ডাস্ট্রি লেভেলে সবচেয়ে বেশি ব্যবহৃত হয় ডেটা Clone করতে এবং Update করতে।

const user = {
  id: 45,
  username: "coder_rafi",
  email: "rafi@web.com",
  phone: "01711111111",
  status: "active",
};

const updatedUser = {
  ...user,
  phone: +034376894,
};

console.log(updatedUser);

// ২. Default Config + User Customization (মার্জ করা) অনেক সময় একটি অ্যাপের ডিফল্ট সেটিংস থাকে, আর ইউজার নিজের মতো কিছু সেটিংস সেট করে। এই দুই অবজেক্টকে এক করার জন্য স্প্রেড অপারেটর সেরা।

const defaultSettings = {
  theme: "light",
  fontSize: "16px",
  showNotifications: true,
  language: "en",
};

const userCustomSettings = {
  theme: "dark",
  fontSize: "18px",
};

const finalSettings = {
  ...defaultSettings,
  ...userCustomSettings,
};

console.log(finalSettings);

// ৩. Shallow Copy (অরিজিনাল ডেটা নিরাপদ রাখা) ইন্ডাস্ট্রিতে সরাসরি কোনো অবজেক্ট এডিট করা (Mutation) খুব বাজে প্র্যাকটিস। স্প্রেড অপারেটর দিয়ে আমরা অবজেক্টের একটি কপি তৈরি করি যাতে অরিজিনাল ডেটা নষ্ট না হয়।

const product = { name: "Keyboard", price: 2500 };

const newProduct = { ...product, price: 3000 };

console.log(product.price);
console.log(newProduct.price);

// ইন্ডাস্ট্রিতে যখন আমরা নেস্টেড অবজেক্ট আপডেট করি, তখন আমাদের প্রতিটি লেভেলে স্প্রেড অপারেটর ব্যবহার করতে হয়। একে বলে Manual Deep Copy।

const employee = {
  id: 1,
  name: "Sakib",
  info: {
    city: "Dhaka",
    post: "Developer",
  },
};

const updatedEmployee = {
  ...employee,
  name: "Sakib Ahmed",
  info: {
    ...employee.info,
    city: "Sylhet",
  },
};

console.log(employee.info.city);
console.log(updatedEmployee.info.city);
console.log(updatedEmployee.name);

/**  ইন্ডাস্ট্রি লেভেলে কোড করার সময় মূলত নিচের ৪টি পরিস্থিতিতে আপনার Spread Operator ব্যবহার করা উচিত। এটি আপনার কোডকে আরও রিডাবল (Readable) এবং আধুনিক করে তোলে:

১. ডেটা ইমিউটেবিলিটি (Immutability) বজায় রাখতে
আধুনিক জাভাস্ক্রিপ্ট ফ্রেমওয়ার্ক (যেমন React বা Redux)-এ অরিজিনাল অবজেক্ট বা অ্যারেকে সরাসরি পরিবর্তন করা নিষেধ। যখন আপনি কোনো ডেটা আপডেট করতে চান কিন্তু আসল সোর্স ফাইলটি নষ্ট করতে চান না, তখন স্প্রেড অপারেটর ব্যবহার করে একটি কপি তৈরি করা সবচেয়ে নিরাপদ।

২. অবজেক্ট বা অ্যারে মার্জ (Merge) করতে
ধরুন আপনার কাছে দুটি আলাদা সোর্স থেকে ডেটা আসছে (যেমন: ইউজারের বেসিক ইনফো এবং ইউজারের সেটিংস)। এই দুটি আলাদা অবজেক্টকে জোড়া লাগিয়ে একটি পূর্ণাঙ্গ প্রোফাইল বানানোর জন্য স্প্রেড অপারেটর সবচেয়ে সহজ মাধ্যম।

৩. ডিফল্ট ভ্যালু সেট করতে (Default Config)
অনেক সময় কোনো ফাংশন বা কম্পোনেন্টে কিছু ডিফল্ট সেটিংস থাকে। ইউজার যদি তার নিজের মতো কিছু সেটিংস দেয়, তবে ডিফল্ট সেটিংসের সাথে ইউজারের সেটিংস মিশিয়ে দেওয়ার জন্য এটি ব্যবহার করা হয়। এতে ইউজারের দেওয়া ভ্যালুগুলো ডিফল্টগুলোকে ওভাররাইট করে দেয়।

৪. নেস্টেড ডেটা আপডেট করতে
যখন কোনো অবজেক্টের অনেক গভীরে (Deeply Nested) কোনো একটি নির্দিষ্ট প্রপার্টি চেঞ্জ করার প্রয়োজন হয়, তখন পুরো স্ট্রাকচার ঠিক রেখে শুধু ঐ নির্দিষ্ট অংশটি আপডেট করতে স্প্রেড অপারেটর অপরিহার্য।

সংক্ষেপে: যখনই আপনার মনে হবে আপনি কোনো অবজেক্ট বা অ্যারেকে "না ভেঙে" তার ভেতরের কিছু পরিবর্তন করবেন বা নতুন কিছু যোগ করবেন, তখনই স্প্রেড অপারেটর ব্যবহার করার কথা ভাববেন।

*/
