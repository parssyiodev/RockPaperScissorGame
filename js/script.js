let userscore = 0;
let compscore = 0;

const options = document.querySelectorAll(".options");
const uscore = document.querySelector("#userScore");
const cscore = document.querySelector("#compScore");
const msg = document.querySelector("#msg");
const msgTxt = document.querySelector(".msgtxt");
const btn = document.querySelector("button");


//Generating Computer Random Select
const compNum = () => {
    const compOps = ["rock", "paper", "scissor"];
    let randomNum = Math.floor(Math.random() * 3);
    return compOps[randomNum];
} 

//Checking what Computer Select
let compSelect;                             
const playGame = () =>{
    compSelect = compNum();
}

//Disable button
const disabledOps = () =>{
    for (box of boxes){
        box.disabled = true;
    }

    turn.classList.add("hide");
}


//Check on each condition who will win
options.forEach((option) =>{
    option.addEventListener("click", () =>{
        const userSelect = option.getAttribute("id");
        playGame();

        if(userSelect === compSelect){
            drawGame();
        } else{
            let userWin = true;

            if(userSelect === "rock"){
                userWin = compSelect === "paper" ? false : true;
            } else if(userSelect === "paper"){
                userWin = compSelect === "scissor" ? false : true;
            } else{
                userWin = compSelect === "rock" ? false : true;
            }

            winner(userWin);
        } 
        
    });
});

btn.addEventListener("click", () => {
    location.reload(); // Reloads the current page
});

const disabledbox = () =>{
    options.forEach (option =>{
        option.classList.add("disabled");
    })
}

let drawGame = () =>{
    msgTxt.innerHTML = `It's Draw!<br> <span>You both selected: ${compSelect} </span>`
}



let winner = (userWin) =>{
    if(userWin){
        uscore.innerHTML = userscore += 1;
        msgTxt.innerHTML = `You Win!<br> <span>Computer Selected: ${compSelect} </span>`
        seriesWin();
    } else{
        cscore.innerHTML = compscore += 1;
        msgTxt.innerHTML = `You Lose!<br> <span>Computer Selected: ${compSelect} </span>`
        seriesWin();
    }
}

let seriesWin = () =>{
    if(userscore === 10){
        msgTxt.innerHTML = `<span>CONGRATULATION <br><br></span>You Win! <br> <span>The Series by ${userscore} : ${compscore}</span>`
        msg.classList.add("up");
        disabledbox();
    } else if(compscore === 10){
        msgTxt.innerHTML = `<span>SORRY <br><br></span>You Lost! <br> <span>The Series by ${compscore} : ${userscore}</span>`
        msg.classList.add("down");
        disabledbox();
    }
}



