let container= document.querySelectorAll(".container");
let boxes= document.querySelectorAll(".box");
// let reset= document.querySelectorAll("#reset");
// let newGameBtn= document.querySelectorAll("#newbtn");
let msg_container = document.querySelector(".msg-container");
let msg=document.querySelectorAll("#msg");

let turn0 =true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() => {
    turn0 =true;
    enableBoxes();
    msg_container.id = "hide";
}


boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        
        if(turn0){
            box.innerText="O";
            turn0 = false;
            checkWinner()
        } else {
            box.innerText="X";
            turn0 = true;
            checkWinner()
        }
        box.disabled = true;
    });
});
const disableBoxes = () =>{
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
};

const showWinner=(winner) =>{
    msg_container.id ="";
    msg.innerText="CONGRATULATIONS,winner is ${winner}";
}

const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes.innerText;
        let pos2Val = boxes.innerText;
        let pos3Val = boxes.innerText;
        
    if( pos1Val != "" && pos2Val != "" && pos3Val != "" ){
        if ( pos1Val===pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val);
        }
      }
    }
};

// newGameBtn.addEventListener("onClick",resetGame);
// reset.addEventListener("onClick",resetGame);