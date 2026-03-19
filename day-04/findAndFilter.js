/**find() হলো তীরের মতো যা একটা লক্ষ্যভেদ করেই থেমে যায়, আর filter() হলো ছাঁকনির মতো যা পুরো মিশ্রণ থেকে নির্দিষ্ট জিনিসের একটা সংগ্রহ বের করে আনে। */

const books = [
  { id: 100, title: "Himu", author: "Humayun Ahmed" },
  { id: 101, title: "Misir Ali", author: "Humayun Ahmed" },
  { id: 102, title: "Pather Panchali", author: "Bibhutibhushan" },
];

const myBook = books.find((book) => book.id === 101);

console.log(myBook);

// find() : "নির্দিষ্ট একজনকে খোঁজা" শর্ত মিললে সাথে সাথে কাজ থামিয়ে দেয়। এটি সরাসরি একটি Object দেয়। মূল উদ্দেশ্য	ইউনিক কিছু বের করা (যেমন: ID, Email)। আউটপুট	একটি সিঙ্গেল উপাদান (Element/Object)। find() কোনো ভ্যালু না পেলে undefined রিটার্ন করে। তাই find() ব্যবহারের পর সেটি চেক করে নেয়া ভালো। আপনি যখন find() ব্যবহার করছেন, তখন মাঝে মাঝে আপনার আইটেমটির পজিশন বা Index জানার প্রয়োজন হতে পারে (বিশেষ করে আইটেমটি আপডেট বা ডিলিট করতে)। তখন find() এর বদলে findIndex() ব্যবহার করা বেশি বুদ্ধিমানের কাজ।

const books3 = [
  { id: 100, title: "Himu", author: "Humayun Ahmed" },
  { id: 101, title: "Misir Ali", author: "Humayun Ahmed" },
  { id: 102, title: "Pather Panchali", author: "Bibhutibhushan" },
];

const humayunBooks = books3.filter((book) => book.author === "Humayun Ahmed");

console.log(humayunBooks);

// পুরো অ্যারের শেষ পর্যন্ত চেক করে। মূল উদ্দেশ্য ফিল্টার করে ছোট লিস্ট বানানো (যেমন: Active Users)। আউটপুট একটি নতুন অ্যারে (Array)।
