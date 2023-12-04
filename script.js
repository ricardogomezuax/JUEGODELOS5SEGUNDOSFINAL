let startTime;
let gameStarted = false;
let timerInterval;

function startGameWithUsername() {
    const username = document.getElementById('username').value.trim();

    if (username !== '' && !gameStarted) {
        
        document.getElementById('name-form').style.display = 'none';
        document.getElementById('timer-container').style.display = 'block';
        document.getElementById('greeting').innerText = `¡Hola, ${username}!`;

        
    }
}
function startGame() {
    if (!gameStarted) {
        
        document.getElementById('result').innerText = '';
        document.getElementById('start-btn').style.display = 'none';
        document.getElementById('click-btn').style.display = 'block'; 
        startTimer();
        setTimeout(endGame, 5000); 
        gameStarted = true;
    }
}

function startTimer() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 10); 
}

function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const remainingTime = Math.max(0, 5000 - elapsedTime);

    const timerDisplay = document.getElementById('timer');
    timerDisplay.innerText = (remainingTime / 1000).toFixed(3);
  
}

function checkTiming() {
    if (gameStarted) {
        clearInterval(timerInterval);
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        const difference = elapsedTime - 5000;

        if (difference === 0) {
            document.getElementById('result').innerText = '¡Estupendo! Lo has hecho perfecto.';
        } else if (difference < 0) {
            if (difference >= -1000) {
                document.getElementById('result').innerText = '¡Se te da bastante bien, pero no lo suficiente!. Inténtalo de nuevo.';
            } else if (difference >= -2000) {
                document.getElementById('result').innerText = '¡No se te da mal, pero hay que seguir practicando!. Inténtalo de nuevo';
            } else if (difference >= -5000) {
                document.getElementById('result').innerText = '¡Eres muy malo!. Inténtalo de nuevo.';
            } else {
                document.getElementById('result').innerText = '¡Te has pasado! Sigue intentándolo.';
            }
        } else {
            document.getElementById('result').innerText = '¡Te has pasado! Sigue intentándolo.';
        }
        document.getElementById('click-btn').style.display = 'none';
        document.getElementById('start-btn').style.display = 'block';
        gameStarted = false;
    } else {
        document.getElementById('result').innerText = 'Haz clic en "Comenzar" para iniciar el juego.';
    }
}

function endGame() {
    if (gameStarted) {
        clearInterval(timerInterval);
        document.getElementById('result').innerText = '¡Tiempo terminado! Has perdido.';
        document.getElementById('click-btn').style.display = 'none';
        document.getElementById('start-btn').style.display = 'block';
        gameStarted = false;
    }
}
