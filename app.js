const select=document.querySelector("#questionSelect");
const output=document.querySelector("#output");
function clearArea(){["status","products","actions","actionResult","posts"].forEach(id=>document.querySelector(`#${id}`).replaceChildren());}
async function loadQuestion(){
  const n=select.value; clearArea(); output.textContent=`Kör question${n}.js …`;
  try{
    await import(`./question${n}.js?run=${Date.now()}`);
    output.textContent=`question${n}.js har körts. Kontrollera Console för utskrifter.`;
  }catch(error){
    console.error(error); output.textContent=`Fel i question${n}.js: ${error.message}. Kontrollera Console.`;
  }
}
document.querySelector("#loadButton").addEventListener("click",loadQuestion);
loadQuestion();
