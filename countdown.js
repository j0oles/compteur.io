// Fichier countdown.js
document.addEventListener('DOMContentLoaded', function() {
    function initializeCountdown(targetDate) {
        var endDate = new Date(targetDate);
        var interval = setInterval(function() {
            var now = new Date();
            var difference = endDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                document.getElementById("hours").textContent = "00";
                document.getElementById("minutes").textContent = "00";
                document.getElementById("seconds").textContent = "00";
                document.getElementById("days").textContent = "0 jour(s)";
                document.getElementById("weeks").textContent = "0,00 semaine(s)";
                return;
            }

            var seconds = Math.floor((difference / 1000) % 60);
            var minutes = Math.floor((difference / (1000 * 60)) % 60);
            var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            var days = Math.floor(difference / (1000 * 60 * 60 * 24));
            var weeks = (days / 7).toFixed(2);

            document.getElementById("hours").textContent = ("0" + hours).slice(-2);
            document.getElementById("minutes").textContent = ("0" + minutes).slice(-2);
            document.getElementById("seconds").textContent = ("0" + seconds).slice(-2);
            document.getElementById("days").textContent = days;
            document.getElementById("weeks").textContent = weeks;
        }, 1000);
    }
    initializeCountdown("March 19, 2024 21:00:00");
});
