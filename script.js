/*Valentin Podgornyy*/

/* this block of code set up all variables */
var roundCount = 0;
var countPlayer = 0;
var countComputer = 0;
var tieCount = 0;
var round=document.getElementById("Round2");   
var player=document.getElementById("Player2");
var computer=document.getElementById("Computer2");
var tie=document.getElementById("Tie2");
var btnShowStart = document.getElementById("showStart");   
var btnShowPlay = document.getElementById("showPlay");  
var startBox = document.getElementById("start");     
var playBox = document.getElementById("play");
var rock = document.getElementById("rock");
var rock2 = document.getElementById("rock2");    
var paper = document.getElementById("paper");
var paper2 = document.getElementById("paper2");    
var scissors = document.getElementById("scissors");
var scissors2 = document.getElementById("scissors2");
var info = document.getElementById("Info");
var buttonOn = document.getElementById("on");
var buttonOff = document.getElementById("off");
var btnHideButton = document.getElementById("hideButton");

/* this block of code set up functions that put you in start window and reset all the results if you played game */
var showStart=function(){
    startBox.style.display="block";
    playBox.style.display="none";
    roundCount = 0;
    countPlayer = 0;
    countComputer = 0;
    tieCount = 0;
    round.innerHTML=(roundCount);
    player.innerHTML=(countPlayer);
    computer.innerHTML=(countComputer);
    tie.innerHTML=(tieCount);
    hideButton();   
}
/* this block of code set up function that show play window */    
var showPlay=function(){
    startBox.style.display="none";
    playBox.style.display="block";   
}
/* this block of code set up function that show "play again" button */
function showButton(){
    buttonOff.style.display="block";
    buttonOn.style.display="none";
}
/* this block of code set up function that hide "play again" button and reset all the pictures */
function hideButton(){
    buttonOn.style.display="block";
    buttonOff.style.display="none";
    info.innerHTML = "...";
    rock.src = "thunder.jpg"; paper.src = "fire.jpg"; scissors.src = "water.jpg";
    rock2.src = "thunder.jpg"; paper2.src = "fire.jpg"; scissors2.src = "water.jpg";
    rock.onclick = clickHandlerRock;
    paper.onclick = clickHandlerPaper;
    scissors.onclick = clickHandlerScissors;
}
/* this 3 blocks of code set up function that changes thunder, fire and water pictures to check picture, also it shows computer choice, tells you result and shows "play again" button */
function clickHandlerRock(){
    
    rock.src = "check.png";
    
    var compChoice = Math.floor(Math.random()*3)+1;
    if(compChoice==1){
        info.innerHTML = "It is tie!";
        rock2.src = "check.png";
        tieCount++;
        tie.innerHTML=(tieCount);
    }
    else if (compChoice==2){
        info.innerHTML = "You lost!";
        paper2.src = "check.png";
        countComputer++;
        computer.innerHTML=(countComputer);
    }
    else{
        info.innerHTML = "You win!";
        scissors2.src = "check.png";
        countPlayer++;
        player.innerHTML=(countPlayer);
    }
    roundCount++;
    round.innerHTML=(roundCount);
    rock.onclick = null;
    paper.onclick = null;
    scissors.onclick = null;
    showButton();
    
}
function clickHandlerPaper(){
    
    paper.src = "check.png";
    var compChoice = Math.floor(Math.random()*3)+1;
    if(compChoice==1){
        info.innerHTML = "You win!";
        rock2.src = "check.png";
        countPlayer++;
        player.innerHTML=(countPlayer);
    }
    else if (compChoice==2){
        info.innerHTML = "It is tie!";
        paper2.src = "check.png";
        tieCount++;
        tie.innerHTML=(tieCount);
    }
    else{
        info.innerHTML = "You lost!";
        scissors2.src = "check.png";
        countComputer++;
        computer.innerHTML=(countComputer);
    }
    roundCount++;
    round.innerHTML=(roundCount);
    rock.onclick = null;
    paper.onclick = null;
    scissors.onclick = null;
    showButton();
}
 function clickHandlerScissors(){
    
    scissors.src = "check.png";
    var compChoice = Math.floor(Math.random()*3)+1;
    if(compChoice==1){
        info.innerHTML = "You lost!";
        rock2.src = "check.png";
        countComputer++;
        computer.innerHTML=(countComputer);
    }
    else if (compChoice==2){
        info.innerHTML = "You win!";
        paper2.src = "check.png";
        countPlayer++;
        player.innerHTML=(countPlayer);
    }
    else{
        info.innerHTML = "It is tie!";
        scissors2.src = "check.png";
        tieCount++;
        tie.innerHTML=(tieCount);
    }
    roundCount++;
    round.innerHTML=(roundCount);
    rock.onclick = null;
    paper.onclick = null;
    scissors.onclick = null;
    showButton();
}    
/* this block of code set up all event listeners */
btnShowPlay.onclick=showPlay;
btnShowStart.onclick=showStart;
btnHideButton.onclick=hideButton
rock.onclick = clickHandlerRock;
paper.onclick = clickHandlerPaper;
scissors.onclick = clickHandlerScissors;