let timer = 60;
let score = 0;
let random = 0;

function incScore(){
    document.querySelector("#score-val").textContent = score;
    score += 10;
}

function getNewHit(){
    random = Math.floor(Math.random()*10);
    document.querySelector("#hit-value").textContent = random;
}

function makeBubble(){
    let clutter="";

    for (let i=0; i<=74; i++){
        let random = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${random}</div>`;
    }
    document.querySelector(".panel-bottom").innerHTML = clutter;
}

function runTimer(){
    let timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        } else {
            clearInterval(timerint);
            document.querySelector(".panel-bottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

document.querySelector(".panel-bottom").addEventListener("click", function(dets){
    let clickNum = Number(dets.target.textContent);
    if(clickNum === random){
        incScore();
        makeBubble();
        getNewHit();
    }
})

getNewHit();
runTimer();
makeBubble();
incScore();