// FRÅGA 5 – DOM och rendering (3p)
// index.html innehåller ul#products.
// 1. Skapa minst tre produkter med name och price.
// 2. Använd map() för att skapa ett li per produkt.
// 3. Varje li ska visa namn, pris och en knapp "Markera".
// 4. Klick på knappen ska lägga klassen "selected" på just det li-elementet.
// 5. Lägg till alla li-element i ul:en.
const products = [
  // Lägg till minst tre produktobjekt
  { name: "Samoon", price: 40 },
  { name: "Teemen", price: 100 },
  { name: "Mkhellel", price: 20 },
  { name: "Ma3oon", price: 190 }
];
const container = document.querySelector("#products");
// Skriv din kod här
const listEl = products.map((product) => {
  const li = document.createElement("li")
  const button = document.createElement("button")
  li.textContent = `${product.name} (${product.price})`
  button.textContent = "Markera"

  button.addEventListener("click", () => {
    li.classList.add("selected")
  })

  li.appendChild(button)
  return li
})

listEl.forEach((li) => {
  container.appendChild(li)
})