// FRÅGA 6 – DOM och event listeners (3p)
// index.html innehåller div#actions och p#actionResult.
// Skapa knapparna "Visa alla", "I lager" och "Slut i lager".
// När en knapp klickas ska actionResult visa knappens text.
// Skapa knapparna med JavaScript och använd addEventListener().
const actions = document.querySelector("#actions");
const actionResult = document.querySelector("#actionResult");
const filters = ["Visa alla", "I lager", "Slut i lager"];
// Skriv din kod här

for (let i = 0; i < filters.length; i++) {
    const button = document.createElement("button")
    button.textContent = filters[i]

    button.addEventListener("click", () => {
        actionResult.textContent = filters[i]
    })

    actions.appendChild(button)
}