let countHome = null;
let countAway = null;
const clickHome = document.querySelector('.home');
const homeNumber = document.querySelector('.home-number');
const homeTeamName = document.querySelector('.homeNameTeam');

const clickAway = document.querySelector('.away');
const awayNumber = document.querySelector('.away-number');
const awayTeamName = document.querySelector('.awayNameTeam');


clickHome.addEventListener('click', () => {
    countHome += 1;
    homeNumber.innerText = countHome;
    console.log(homeNumber);
})


clickAway.addEventListener('click', () => {
    countAway += 1;
    awayNumber.innerText = countAway;
    console.log(awayNumber);
})

const formHome = document.querySelector('form[name=form-home]');
formHome.addEventListener('submit', (event) => {
    const home = document.querySelector('.homeTimInput').value;
    console.log(home);
    homeTeamName.innerText = home;
    event.preventDefault();
})

const formAway = document.querySelector('form[name=form-away]');
formAway.addEventListener('submit', (event) => {
    const away = document.querySelector('.awayTimInput').value;
    console.log(away);
    awayTeamName.innerText = away;
    event.preventDefault();
})



// CODE MENAMPILKAN WAKTU
function matchTime(hours, minutes) {
    const timeTarget = new Date(`Mar 20, 2022 ${hours}:${minutes}:00`).getTime();

    const time = setInterval(function () {
        const timeNow = new Date().getTime();
        const difference = timeTarget - timeNow;

        const hour = Math.floor(difference / (1000 * 60 * 60 * 24));
        const minute = Math.floor(timeNow % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(timeNow % (1000 * 60) / (1000));
        console.log(`Waktu tersisah ${hour} : ${minute} : ${seconds}`);


        const timeMinutes = document.querySelector('.minutes');
        const timeSeconds = document.querySelector('.seconds');
        timeMinutes.innerText = minute;
        timeSeconds.innerText = seconds;

        if (minute >= minutes) {
            clearInterval(time);
            alert('Waktu Habis');
            timeMinutes.innerText = '00';
            timeSeconds.innerText = '00';
        }



    }, 1000)

}


// CODE MENHINPUT WAKTU
const formTimeMatch = document.querySelector('form[name=timer]');
formTimeMatch.addEventListener('submit', (event) => {
    event.preventDefault();

    const hour = document.querySelector('.hour-input').value;
    const minute = document.querySelector('.minute-input').value;

    matchTime(hour, minute);

})