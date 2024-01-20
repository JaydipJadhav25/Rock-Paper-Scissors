let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
let userscorebord =document.querySelector("#user-score");
let comscorebord =document.querySelector("#computer-score");
// console.log(userscorebord);
// console.log(comscorebord);
let info =document.querySelector(".info");



 
const draw = () =>{

    console.log("draw game!");
    
    msg.innerText ="Draw Game . Play Again ";
    msg.style.backgroundColor = "yellow";
    
       
};
const showwiner = (userwin ,userchoice ,compchoice) =>{

    if(userwin){
    
     msg.innerText = ` You Win! Your ${userchoice} Beats ${compchoice} `;
     msg.style.backgroundColor = "green";
     
    
     userscore++;
     userscorebord.innerText =userscore;

    }
    else{
       
     msg.innerText = `You Lose . computer ${compchoice} beats ${userchoice} `;
     msg.style.backgroundColor = "red";
     computerscore++;
     comscorebord.innerText = computerscore;

        
    }

};
const gencomchoice = () => {
    const option =["rock" , "paper" , "scissors"];

    const randomidx = Math.floor(Math.random() * 3);
    return option[randomidx];
};


const playgame = (userchoice) =>{
    console.log(" user choice =",userchoice);
    //genrate computer choice 
    const compchoice = gencomchoice();
    console.log("computer choice = ", compchoice);
    
    if(userchoice === compchoice){
        //draw game 

        draw();
    }
    else{
        let userwin = true;
    }
    if(userchoice ==="rock"){
        // scissors , paper
       userwin =   compchoice === "paper" ? false : true;
    }
    else if(userchoice === "paper"){
        //scissors , rock 
    userwin = compchoice === "scissors" ? false : true ;
    }
    else {
        // rock , paper
    userwin = compchoice === "rock" ? false : true ;

    }

    showwiner(userwin, userchoice ,compchoice);
   
};

choices.forEach((choice) =>{
console.log(choice);
choice.addEventListener("click" , () =>{
    let userchoice =choice.getAttribute("id") //acess id uers choics 
    // console.log("choics was clicked !" , userchoice);
    playgame(userchoice);
})
});
