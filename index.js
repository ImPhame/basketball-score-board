let scoretHome = document.getElementById("score-home");
let scoretGuest = document.getElementById("score-guest")

let resultHome =0;
let resultGuest =0;

function score1Home(){
    resultHome +=1;
    scoretHome.textContent = resultHome;
}

function score2Home(){
     resultHome +=2;
    scoretHome.textContent = resultHome;
}

function score3Home(){
    resultHome +=3;
    scoretHome.textContent = resultHome;
    
}

function score1Guest(){
    resultGuest +=1;
    scoretGuest.textContent = resultGuest;
}

function score2Guest(){
     resultGuest +=2;
    scoretGuest.textContent = resultGuest;
}

function score3Guest(){
    resultGuest +=3;
    scoretGuest.textContent = resultGuest;
    
}