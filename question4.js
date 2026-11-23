// FRÅGA 4 – Spread, rest och immutability (3p)
// Ändra INTE originalobjektet eller dess array.
// 1. updateUserCity(user,newCity): returnera nytt objekt med ny city (spread).
// 2. addHobbies(user,...newHobbies): returnera nytt objekt med gamla + nya hobbies.
//    Använd rest-parametern och spread.
// 3. Kontrollera att originalobjektet är oförändrat.
const user = { name: "Sam", city: "Uppsala", hobbies: ["Gaming", "Running"] };
const updateUserCity = (user, newCity) => { return { ...user, city: newCity } };
const addHobbies = (user, ...newHobbies) => { return { ...user, hobbies: [ ...user.hobbies, ...newHobbies ] } };
console.log(updateUserCity(user, "Stockholm"));
console.log(addHobbies(user, "Reading", "Cooking"));
console.log("Original:", user);
