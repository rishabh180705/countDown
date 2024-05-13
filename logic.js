let target = new Date('2025-01-01T00:00:00');
let box=document.querySelector("#counter");

const updateTime = function() {
    let current = new Date();
    let diff = target - current;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
 
  box.innerHTML=days +  ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
    setTimeout(updateTime, 1000);
}

updateTime();
