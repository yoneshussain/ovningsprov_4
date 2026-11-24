// FRÅGA 8 – Promise och async/await (2p)
// 1. wait(ms) ska returnera en Promise som löses efter ms millisekunder.
//    Använd new Promise() och setTimeout().
// 2. runSequence() ska skriva "Start", vänta 500 ms, skriva "Efter 500 ms",
//    vänta ytterligare 500 ms och skriva "Klart".
// 3. Anropa runSequence().
const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
};
const runSequence = async () => {
    console.log("Start")
    await wait(500)
    console.log("Efter 500 ms")
    await wait(500)
    console.log("Klart")
};
// Anropa funktionen här.
runSequence()