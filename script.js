

const secondsClass = document.querySelector('.seconds');
const minutesClass = document.querySelector('.minutes');
const hoursClass = document.querySelector('.hours');
const daysClass = document.querySelector('.days');
const secondsCard = document.querySelector('.box-seconds');
const minutesCard = document.querySelector('.box-minutes');
const hoursCard=document.querySelector('.box-hours');
const daysCard = document.querySelector('box-days');


const getRemainTime = deadline =>{
    let now = new Date(),
    remainTime =(new Date(deadline) - now + 1000) /1000;
    remainSeconds = ('0'+Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0'+Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0'+Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = ('0'+Math.floor(remainTime / (3600 * 24))).slice(-3)

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
} 

function updateCountdown(){
    let rotationSeconds =0,rotationMinutes=0,rotationHours=0,rotationDays=0;
    let date = new Date("2021/12/24 24:00:00");
    setInterval(() => {
    
    secondsClass.innerHTML = getRemainTime(date).remainSeconds;
    minutesClass.innerHTML=getRemainTime(date).remainMinutes;
    hoursClass.innerHTML=getRemainTime(date).remainHours;
    daysClass.innerHTML=getRemainTime(date).remainDays;

    //cards rotation
    rotationSeconds +=360;
    secondsCard.style.transform=`rotatex(${rotationSeconds}deg)`;
    if(secondsClass.innerHTML=="00"){
        rotationMinutes+=360;
        minutesCard.style.transform=`rotatex(${rotationMinutes}deg)`;
    }
    if(minutesClass.innerHTML=="00"){
        rotationHours+=360;
        hoursCard.style.transform=`rotatex(${rotationHours}deg)`;
    }
    if(hoursClass.innerHTML=="00"){
        rotationDays+=360;
        daysCard.style.transform=`rotatex(${rotationDays}deg)`;
    }
    }, 1000);
}
updateCountdown();

//background movement
var move = 1;
setInterval(() => {
    move +=1;
    document.querySelector('.container').style.backgroundPosition=`${move}px`;
}, 30);


