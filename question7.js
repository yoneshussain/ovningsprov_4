// FRÅGA 7 – Fetch och async/await (4p)
// Hämta https://jsonplaceholder.typicode.com/posts
// 1. Skriv async-funktionen getPosts() med fetch och await.
// 2. Kontrollera response.ok och kasta Error om svaret inte är OK.
// 3. Returnera JSON-datan.
// 4. Visa de fem första inläggen där userId === 1.
// 5. Rendera title i h3 och body i p inuti #posts.
// 6. Visa felmeddelande i #status om något går fel (try/catch).
const postsContainer = document.querySelector("#posts");
const statusElement = document.querySelector("#status");
const url = "https://jsonplaceholder.typicode.com/posts";
const getPosts = async () => {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Something went wrong!")
    }

    const data = await response.json()
    return data
};

// Skriv kod som anropar getPosts(), filtrerar och renderar.
try {
    const data = await getPosts()
    const filteredData = data
        .filter((post) => post.userId === 1)
        .slice(0, 5)

    filteredData.forEach((post) => {
        const h3 = document.createElement("h3")
        const p = document.createElement("p")

        h3.textContent = post.title
        p.textContent = post.body

        postsContainer.append(h3, p)
    })

} catch (error) {
    console.log("Something went wrong:", error)

    const err = document.createElement("p")
    err.textContent = error

    statusElement.appendChild(err)
}