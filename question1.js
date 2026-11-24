// FRÅGA 1 – Funktioner och villkor (3p)
// Skriv en arrow function calculateFinalPrice(price, discount, isMember).
// discount är procent (20 betyder 20 %). Medlemmar får ytterligare 5 % rabatt.
// Returnera slutpriset. Ändra inte argumentet price.
// Test: (500,20,false) -> 400 och (500,20,true) -> 375.
const calculateFinalPrice = (price, discount, isMember) => {
  // Skriv din kod här
  const totalDiscount = discount + (isMember ? 5 : 0)
  const deduction = price * (totalDiscount / 100)
  return price - deduction
};
console.log(calculateFinalPrice(500, 20, false));
console.log(calculateFinalPrice(500, 20, true));
