// Dom element
const daysElm = document.querySelector('#days');
const hoursElm = document.querySelector('#hours');
const minutesElm = document.querySelector('#minutes');
const secondsElm = document.querySelector('#seconds');

const endDate = new Date("December 25 2023");
const endDateInMs = endDate.getTime();

// table in milliseconds
const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

function timer() {
    const nowInMs = new Date().getTime();

    const diff = endDateInMs - nowInMs;

    if ( diff > 0 ) {

        daysElm.innerHTML = Math.floor(diff / dayInMs);
        hoursElm.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
        minutesElm.innerHTML = Math.floor((diff % hourInMs) / minuteInMs);
        secondsElm.innerHTML = Math.floor((diff % minuteInMs) / secondInMs);

    } else {
        clearInterval(counterTimer);

        document.getElementById('countdown-container').style.display = 'none';
        document.getElementById('countdown-message').style.display = 'block';
    }

}

const counterTimer = setInterval(timer, 1000);
timer();
