/**
 * slice() মেথড দুটি সংখ্যা (প্যারামিটার) নেয়:

শুরু (Start): যে ইনডেক্স থেকে আপনি কাটা শুরু করবেন।

শেষ (End): যে ইনডেক্সের আগে পর্যন্ত আপনি কাটবেন (শেষের ইনডেক্সটি কিন্তু আসবে না)।
 */

const numbers = [0, 1, 2, 3, 4, 5];

const part = numbers.slice(2, 5);

console.log(part);
console.log(numbers);
