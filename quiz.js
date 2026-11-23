const questions = [
  {
    "q": "Vad beskriver en Promise bäst?",
    "a": [
      "En funktion som alltid körs direkt",
      "Ett objekt som representerar ett framtida resultat av en asynkron operation",
      "En metod som gör kod synkron",
      "En array med callbacks"
    ],
    "c": 1,
    "e": "En Promise representerar ett värde som kan bli tillgängligt senare. Den kan vara pending, fulfilled eller rejected."
  },
  {
    "q": "Vad gäller för en funktion som deklareras med async?",
    "a": [
      "Den returnerar alltid en Promise",
      "Den kan aldrig kasta fel",
      "Den körs alltid efter setTimeout",
      "Den returnerar alltid en array"
    ],
    "c": 0,
    "e": "En async-funktion returnerar alltid en Promise."
  },
  {
    "q": "Vad gör await?",
    "a": [
      "Stoppar hela webbläsaren",
      "Pausar fortsättningen i den omgivande async-funktionen tills Promisen avgjorts",
      "Startar en ny tråd",
      "Gör Promise till callback"
    ],
    "c": 1,
    "e": "await pausar den omgivande async-funktionen, inte hela JavaScript-miljön."
  },
  {
    "q": "Vilken utskriftsordning får du: A synkront, setTimeout(B,0), Promise.then(C), D synkront?",
    "a": [
      "A, B, C, D",
      "A, D, B, C",
      "A, D, C, B",
      "C, A, D, B"
    ],
    "c": 2,
    "e": "Synkron kod körs först, sedan Promise microtasks och därefter timer callback."
  },
  {
    "q": "Vad är call stackens uppgift?",
    "a": [
      "Lagra npm-paket",
      "Hålla reda på aktiva funktionsanrop",
      "Spara Promise-resultat permanent",
      "Visa DOM-element"
    ],
    "c": 1,
    "e": "Call stack håller reda på vilka funktioner som körs och deras anropsordning."
  },
  {
    "q": "Vad returnerar fetch() direkt?",
    "a": [
      "Ett färdigt JSON-objekt",
      "En Promise som uppfylls med ett Response-objekt",
      "En array",
      "En HTML-sida"
    ],
    "c": 1,
    "e": "fetch() returnerar en Promise. response.json() returnerar också en Promise."
  },
  {
    "q": "Vad används Node.js främst till?",
    "a": [
      "Köra JavaScript utanför webbläsaren",
      "Formatera CSS",
      "Ersätta HTML",
      "Skapa databastabeller automatiskt"
    ],
    "c": 0,
    "e": "Node.js är en JavaScript-runtime som kan köra JavaScript i exempelvis terminal och servermiljö."
  },
  {
    "q": "Vad är npm?",
    "a": [
      "En webbläsare",
      "En pakethanterare för JavaScript-ekosystemet",
      "En CSS-ram",
      "En arraymetod"
    ],
    "c": 1,
    "e": "npm används för att installera och hantera paket samt köra projektets scripts."
  },
  {
    "q": "Vad innehåller package.json vanligtvis?",
    "a": [
      "Projektinformation, beroenden och scripts",
      "Webbsidans HTML",
      "Webbläsarens cache",
      "En kopia av node_modules"
    ],
    "c": 0,
    "e": "package.json beskriver bland annat projektet, dependencies och scripts."
  },
  {
    "q": "Vad gör npm install i ett projekt?",
    "a": [
      "Installerar projektets beroenden",
      "Startar alltid Vite",
      "Publicerar webbplatsen",
      "Skapar automatiskt alla filer"
    ],
    "c": 0,
    "e": "npm install installerar projektets beroenden utifrån package.json och låsfilen."
  },
  {
    "q": "Vad används Vite typiskt till?",
    "a": [
      "Som databas",
      "Som utvecklingsserver och build tool",
      "Som ersättning för JavaScript",
      "Som källkontroll"
    ],
    "c": 1,
    "e": "Vite erbjuder en utvecklingsserver och bygger filer för produktion."
  },
  {
    "q": "Vad är huvudsyftet med linting?",
    "a": [
      "Hitta potentiella kodproblem och regelbrott",
      "Minska bildstorlek",
      "Publicera kod",
      "Konvertera JS till HTML"
    ],
    "c": 0,
    "e": "Linting analyserar kod och kan hitta misstänkta konstruktioner och regelbrott."
  },
  {
    "q": "Vad gör en formatterare som Prettier?",
    "a": [
      "Kör API-anrop",
      "Formaterar kod konsekvent",
      "Hittar alla logiska fel",
      "Installerar paket"
    ],
    "c": 1,
    "e": "En formatterare bestämmer konsekvent kodlayout, indrag och radbrytningar."
  },
  {
    "q": "Vilket påstående passar bäst in på funktionell programmering?",
    "a": [
      "Ändra alltid ursprungsarrayen",
      "Dela upp logik i funktioner och undvik onödiga sidoeffekter",
      "All kod måste ligga i klasser",
      "Använd aldrig returvärden"
    ],
    "c": 1,
    "e": "Funktionell programmering betonar funktioner, dataflöden, rena funktioner och att undvika mutation."
  },
  {
    "q": "Vad kännetecknar en ren funktion?",
    "a": [
      "Den ändrar alltid DOM",
      "Samma argument ger samma resultat och funktionen saknar sidoeffekter",
      "Den måste vara async",
      "Den får bara ha en rad"
    ],
    "c": 1,
    "e": "En ren funktion beror på argumenten, ger samma output för samma input och ändrar inget utanför sig."
  },
  {
    "q": "Vad gör map()?",
    "a": [
      "Tar bort alla objekt",
      "Skapar en ny array genom att omvandla varje element",
      "Returnerar första elementet",
      "Ändrar alltid originalarrayen"
    ],
    "c": 1,
    "e": "map() kör en callback för varje element och returnerar en ny array med resultaten."
  },
  {
    "q": "Vad är en central idé i OOP?",
    "a": [
      "Samla data och beteenden i objekt",
      "Bara använda globala variabler",
      "Undvika metoder",
      "Alla funktioner måste vara rena"
    ],
    "c": 0,
    "e": "OOP organiserar ofta program kring objekt med egenskaper och metoder."
  },
  {
    "q": "När kan OOP vara lämpligt?",
    "a": [
      "När modellen innehåller objekt med eget tillstånd och beteenden",
      "Bara när man arbetar med arrayer",
      "När man aldrig skapar objekt",
      "Endast för CSS-animationer"
    ],
    "c": 0,
    "e": "OOP kan passa när objekt har tydligt tillstånd och beteenden, till exempel produkter eller användare."
  }
];
const form = document.querySelector("#quizForm");
const questionContainer = document.querySelector("#quizQuestions");
const result = document.querySelector("#quizResult");
function renderQuiz() {
  questionContainer.replaceChildren();
  questions.forEach((question, index) => {
    const fieldset = document.createElement("fieldset"); fieldset.className = "question";
    const heading = document.createElement("h3"); heading.textContent = `${index + 1}. ${question.q}`; fieldset.append(heading);
    question.a.forEach((answer, answerIndex) => {
      const label = document.createElement("label"); label.className = "answer";
      const input = document.createElement("input"); input.type = "radio"; input.name = `q${index}`; input.value = String(answerIndex); input.required = true;
      label.append(input, document.createTextNode(answer)); fieldset.append(label);
    });
    questionContainer.append(fieldset);
  });
}
form.addEventListener("submit", event => {
  event.preventDefault(); let score = 0; const feedback = [];
  questions.forEach((question, index) => {
    const selected = form.querySelector(`input[name="q${index}"]:checked`);
    const correct = selected && Number(selected.value) === question.c; if (correct) score++;
    feedback.push(`<section class="${correct ? "correct" : "incorrect"}"><strong>${index + 1}. ${correct ? "Rätt" : "Inte rätt"}</strong><p class="explanation">${question.e}</p></section>`);
  });
  result.hidden = false; result.innerHTML = `<h2>Resultat: ${score} / ${questions.length}</h2><p>${Math.round(score / questions.length * 100)} % rätt.</p>${feedback.join("")}`;
  result.scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#resetQuiz").addEventListener("click", () => { form.reset(); result.hidden = true; result.replaceChildren(); window.scrollTo({ top: 0, behavior: "smooth" }); });
renderQuiz();
