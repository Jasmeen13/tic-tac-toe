const uname = document.querySelector(".user-name")
const box = document.querySelectorAll("td");
const btn = document.querySelector("button");
const heading = document.querySelector(".user-turn");
const inputOpt = document.querySelector("#input-options");
let firstTurn = true;
let user1Symbol = "X";
let user2Symbol = "O";
let boxCount =0;

box.forEach((b)=>{b.addEventListener("click",()=>{
    
    if(firstTurn){
        firstTurn = false;
        const radioX = document.querySelector("#X");
        if(!radioX.checked){
            user1Symbol = "O";
            user2Symbol = "X";
        } 
        inputOpt.style.display = "none";
        b.innerText = user1Symbol;
        b.classList.add(user1Symbol);
        uname.innerText = "User 2";
        boxCount++;
    }
    else if(b.innerText !== ""){

    }
    else if(uname.innerText === "User 1"){
        b.innerText = user1Symbol;
        b.classList.add(user1Symbol);
        boxCount++;
        if(checkWon()){
            gameWon();
        }
        else if(boxCount === 9){
            gameDraw();
        }
        else{
            uname.innerText = "User 2";
        }
    }
    else{
        b.innerText = user2Symbol;
        b.classList.add(user2Symbol);
        boxCount++;
        if(checkWon()){
            gameWon();
        }
        else if(boxCount === 9){
            gameDraw();
        }
        else{
            uname.innerText = "User 1";
        }
    }
})})

const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7], [2,5,8],[0,4,8],[2,4,6]];
function checkWon(){
    for(let pattern of winPattern){
        const v1 = box[pattern[0]].innerText;
        const v3 = box[pattern[2]].innerText;
        const v2 = box[pattern[1]].innerText;
        if(v1!==""&&v2!==""&& v3!=""){
            if(v1 ===v2&& v1===v3){
                return true;
            }
        }
    }
    return false;
}
function gameWon(){
    heading.innerText = "Congratulation !!";
    uname.innerText = `${uname.innerText} Won`
    btn.style.display = "block";
    box.forEach((b)=>{
        if(b.innerText ===""){
            b.innerText = '-';
        }
    })
}
function gameDraw(){
    heading.innerText = "Game Draw !!";
    uname.innerText = `Click to play again`   
    btn.style.display = "block";
    
}

btn.addEventListener("click",()=>{
    firstTurn = true;
    user1Symbol = "X";
    user2Symbol = "O";
    boxCount = 0;
    heading.innerText = "Turn";
    uname.innerText = "User 1" 
    inputOpt.style.display = "block";
    btn.style.display = "none";
    box.forEach((b)=>{
        b.innerText = "";
        b.classList.remove("X","O");
    })
})

document.querySelector(".reset-game").addEventListener("click",()=>{
    firstTurn = true;
    user1Symbol = "X";
    user2Symbol = "O";
    boxCount = 0;
    heading.innerText = "Turn";
    uname.innerText = "User 1" 
    inputOpt.style.display = "block";
    box.forEach((b)=>{
        b.innerText = "";
        b.classList.remove("X","O");
    })
    btn.style.display = "none";
})
