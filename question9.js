// FRÅGA 9 – Klasser, constructor, metoder och getters (3p)
// Skapa klassen Product:
// constructor(name,price,stock) sparar egenskaperna.
// getter inventoryValue returnerar price * stock.
// changeStock(amount) uppdaterar stock med amount, men stock får aldrig bli < 0.
// Metoden ska returnera det nya stock-värdet.
// Skapa tre produkter och testa klassen.
// Kom ihåg: en getter används utan parenteser.
class Product {
  // Skriv din kod här
  constructor(name, price, stock) {
    this.name = name
    this.price = price
    this.stock = stock
  }

  inventoryValue() {
    return this.price * this.stock
  }

  changeStock(amount) {
    if (!amount > 0) {
      return "Amount needs to be bigger than 0!"
    }

    this.stock = amount
    return this.stock
  }
}
// Testa klassen här

const skor = new Product("Skor", 3500, 3)
const handskar = new Product("Handskar", 200, 2)
const mossa = new Product("Mössa", 900, 100)
const dachri = new Product("Dachri", 98873, 23)
console.log(skor.inventoryValue())
console.log(skor.changeStock(2))
console.log(skor)