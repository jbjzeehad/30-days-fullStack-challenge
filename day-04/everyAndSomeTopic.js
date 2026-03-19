// every() তখনই true রিটার্ন করবে যখন অ্যারের প্রত্যেকটি উপাদান আপনার দেওয়া শর্ত পূরণ করবে। যদি একটিও শর্ত ভঙ্গ করে, তবে সে false দিবে।
// লজিক	সবগুলোকে সত্য হতে হবে। প্রথম false পেলেই থেমে যায়।

const marks = [40, 55, 80, 32, 90];

const isAllPassed = marks.every((mark) => mark >= 33);

console.log(isAllPassed);

// খানে একজনের মার্ক 32, যা শর্ত পূরণ করেনি। যেহেতু সবাই পাস করেনি, তাই রেজাল্ট false এসেছে। এটি অনেকটা AND গেটের মতো ($1 \cdot 1 \cdot 0 \cdot 1 = 0$)।

// some() তখনই true রিটার্ন করবে যদি অ্যারের অন্তত একটি উপাদান শর্ত পূরণ করে। সবাই যদি শর্ত ভঙ্গ করে, শুধুমাত্র তখনই সে false দিবে।

// লজিক	একটি সত্য হলেই হবে। প্রথম true পেলেই থেমে যায়।

const students = [
  { name: "Abir", paymentStatus: "Paid" },
  { name: "Sifat", paymentStatus: "Pending" },
  { name: "Niloy", paymentStatus: "Paid" },
];

const hasPending = students.some(
  (student) => student.paymentStatus === "Pending",
);

console.log(hasPending);

// এখানে সিফাতের পেমেন্ট পেন্ডিং আছে। যেহেতু "অন্তত একজন" পাওয়া গেছে যার পেমেন্ট বাকি, তাই রেজাল্ট true এসেছে। এটি OR গেটের মতো ($0 + 1 + 0 = 1$)।
