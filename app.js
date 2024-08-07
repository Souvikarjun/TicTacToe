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
        } else {
            box.innerText="X";
            turn0 = true;
        }
        box.disabled = true;
        if (checkWinner(box.innerText)){
            console.log('winner')
        }
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
    msg_container.id.remove("hide");
    msg.innerText="CONGRATULATIONS,winner is ${winner}";
}

function checkWinner(innerbox) {
    return winPatterns.some(combination => {
        return combination.every(index => {
            return box.innerText[index].classList.contains(innerbox)
        })
    })
};

// newGameBtn.addEventListener("onClick",resetGame);
// reset.addEventListener("onClick",resetGame);