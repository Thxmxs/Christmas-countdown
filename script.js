

const secondsClass = document.querySelector('.seconds');
const minutesClass = document.querySelector('.minutes');
const hoursClass = document.querySelector('.hours');
const daysClass = document.querySelector('.days');

let date = new Date("2020/12/24 24:00:00");
const getRemainTime = deadline =>{
    let now = new Date(),
    remainTime =(new Date(deadline) - now + 1000) /1000;
    remainSeconds = ('0'+Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0'+Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0'+Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = ('0'+Math.floor(remainTime / (3600 * 24))).slice(-2)

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
} 


function updateCountdown(){
    setInterval(() => {
    secondsClass.innerHTML = getRemainTime(date).remainSeconds;
    minutesClass.innerHTML=getRemainTime(date).remainMinutes;
    hoursClass.innerHTML=getRemainTime(date).remainHours;
    daysClass.innerHTML=getRemainTime(date).remainDays;
    }, 1000);
}
updateCountdown();