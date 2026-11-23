// FRÅGA 2 – map, filter och find (3p)
// 1. getAvailableProducts(products): returnera produkter med stock > 0 (filter).
// 2. getProductById(products,id): returnera matchande produkt (find).
// 3. getProductNames(products): returnera en array med enbart namnen (map).
const products = [
  { id: 1, name: "Keyboard", stock: 4 }, { id: 2, name: "Mouse", stock: 0 },
  { id: 3, name: "Monitor", stock: 7 }, { id: 4, name: "Headphones", stock: 2 }
];
const getAvailableProducts = (products) => { return products.filter((product) => product.stock > 0) };
const getProductById = (products, id) => { return products.find((product) => product.id === id) };
const getProductNames = (products) => { return products.map((product) => product.name) };
console.log(getAvailableProducts(products));
console.log(getProductById(products, 3));
console.log(getProductNames(products));
