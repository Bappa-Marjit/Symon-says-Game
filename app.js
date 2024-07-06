let gameSeq = [];
let userSeq = [];
let level = 0;
let isStarted = false;

let colours = ["red", "green", "yellow", "pink"];
let btns = document.querySelectorAll('.btn');
let h2 = document.querySelector("h2");


document.addEventListener("keypress",()=>{
    if(isStarted == false){
    console.log("game Started");
    isStarted=true;
    levelUp();
    }
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `level-${level}`
    let randIdx = Math.floor(Math.random()*3);
    let randColour = colours[randIdx];
    let randBtn = document.querySelector(`.${randColour}`);
    gameSeq.push(randColour);
    console.log(gameSeq);
    gameFlash(randBtn);
};


function chekAns(idx){
if(userSeq[idx] == gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
    }
}else{
    h2.innerText = `Game over press any key to start : level ${level}`;
    reset();
}
}


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },180)
}


function userFlash(btn){
    btn.classList.add("flash1");
    setTimeout(()=>{
        btn.classList.remove("flash1");
    },180)
}

for(bt of btns){
    bt.addEventListener("click",btnPress);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColour = btn.getAttribute("id");
    console.log(userColour);
    userSeq.push(userColour);
    console.log(userSeq);
    chekAns(userSeq.length-1);
}


function reset(){
 gameSeq = [];
 userSeq = [];
 level = 0;
 isStarted = false;
}








