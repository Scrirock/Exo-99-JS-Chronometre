// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let countUp = function() {
    seconde++
    seconds.innerHTML = seconde;
    if (flag === true) setTimeout(countUp, 1000);
};

// How can you make it stop counting?
let stopCountUp = function() {
    flag = false;
};
let seconde = 0;
let flag = true;
let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);
setTimeout(countUp, 1000);