// Imposta la data di fine del timer
var countDownDate = new Date("December 25, 2023 23:59:59").getTime();

// Aggiorna il timer ogni secondo
var timer = setInterval(function() {
    
    // Ottieni la data e l'ora corrente
    var now = new Date().getTime();
    
    // Calcola la differenza tra la data di fine e la data corrente
    var distance = countDownDate - now;
    
    // Calcola ore, minuti e secondi
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Aggiorna l'HTML con i valori del timer
    document.getElementById("hours").textContent = padZero(hours);
    document.getElementById("minutes").textContent = padZero(minutes);
    document.getElementById("seconds").textContent = padZero(seconds);
    
    // Se il timer raggiunge lo 0, mostra un messaggio
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").textContent = "Tempo scaduto!";
    }
}, 1000);

// Funzione per aggiungere uno zero davanti a numeri inferiori a 10
function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}