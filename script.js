let startTime = 10;
let time = startTime;


const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const countdown = document.getElementById('countdown');

let timeInterval = null;

function updateCountDown() {
    countdown.innerText = `Remaining time: ${time} seconds`
}

function finalTime () {
    clearInterval(timeInterval);
    timeInterval = null;
    countdown.innerText = "Time's up!";
}

start.addEventListener('click', ()=> {
    if (timeInterval !== null) {
        clearInterval(timeInterval);
    }
    timeInterval = setInterval(() => {
       if (time > 0) {
           time--;
           updateCountDown();
       } else {
        finalTime();
       }
    }, 1000);

    updateCountDown();
})

stop.addEventListener('click', ()=> {
    if (timeInterval !== null) {
        clearInterval(timeInterval);
        timeInterval = null;
        countdown.innerText = `Timer stopped at ${time} seconds`;
    }

});

reset.addEventListener('click', ()=> {
    clearInterval(timeInterval);
    timeInterval = null;
    time = startTime;
    updateCountDown();
});

updateCountDown();