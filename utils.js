// FRÅGA 10 – utils.js (3p)
// Skapa och exportera två NAMNGIVNA funktioner:
// formatPrice(price): returnera pris med två decimaler + " kr".
// Exempel: 25 -> "25.00 kr".
// calculateDiscount(price,discountPercent): returnera priset efter rabatt.
// Skriv funktionerna här och exportera dem.

export function formatPrice(price) {
    const formattedPrice = price.toFixed(2)
    return formattedPrice + " kr"
}

export function calculateDiscount(price, discountPercent) {
    const percentage = `0.${discountPercent}`
    const discount = price * percentage
    const finalPrice = price - discount

    return finalPrice
}

