// FRÅGA 3 – reduce (3p)
// calculateOrderTotal(order): summera price * quantity med reduce().
// calculateTotalQuantity(order): summera quantity med reduce().
// En tom array ska ge 0.
const order=[
  {name:"Notebook",price:35,quantity:3},
  {name:"Pen",price:12,quantity:5},
  {name:"Backpack",price:450,quantity:1}
];
const calculateOrderTotal=(order)=>{ /* Skriv din kod här */ };
const calculateTotalQuantity=(order)=>{ /* Skriv din kod här */ };
console.log(calculateOrderTotal(order)); // 615
console.log(calculateTotalQuantity(order)); // 9
console.log(calculateOrderTotal([])); // 0
