

const statusDiv= document.querySelector('.status');
statusDiv.innerHTML= "x's turn";

const resetDiv= document.querySelector('.reset');

const cellDivs =document.querySelectorAll('.game-cell');



let gameIsLive=true;
let xIsNext=true;
let winner=null;


const handleReset= (e) => {
    if (winner!==null || statusDiv.innerHTML=="Game is Tie"){
       window.location.reload();
    }else{
    
   
    statusDiv.innerHTML="Status : --";
     xIsNext=true;
     winner=null;
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
    }
}
}

const handleCellCLick=(e) =>{
    const classLists=e.target.classList;
    const location=classLists [1];
    console.log(location);

    if( classLists [2]==='x' ||classLists [2]==='o'){return;}

    if(xIsNext){
        classLists.add('x');
        checkGameStatus();
        xIsNext=!xIsNext;
        if (gameIsLive===true){
        statusDiv.innerHTML="o's turn"
        }

    }else{
        classLists.add('o');
        checkGameStatus();
        xIsNext=!xIsNext;
        if (gameIsLive===true){
        statusDiv.innerHTML="x's turn"
        }
    }
}




resetDiv.addEventListener('click', handleReset);

for(const cellDiv of cellDivs){
    cellDiv.addEventListener('click' ,handleCellCLick)
}



const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[2];
    const topMiddle = cellDivs[1].classList[2];
    const topRight = cellDivs[2].classList[2];
    const middleLeft = cellDivs[3].classList[2];
    const middleMiddle = cellDivs[4].classList[2];
    const middleRight = cellDivs[5].classList[2];
    const bottomLeft = cellDivs[6].classList[2];
    const bottomMiddle = cellDivs[7].classList[2];
    const bottomRight = cellDivs[8].classList[2];
   


    if (topLeft && topLeft===topRight && topLeft===topMiddle &&!winner){
       
        gameIsLive=false;
        winner=topLeft;
        statusDiv.innerHTML=`${topLeft}   has won`;
       
    }

    
    if (middleLeft && middleLeft===middleRight && middleLeft===middleMiddle  &&!winner){
        
        gameIsLive=false;
        winner=middleLeft;
        statusDiv.innerHTML=`${middleLeft}   has won`;
       
    }

    
    if (bottomLeft && bottomLeft===bottomRight && bottomLeft===bottomMiddle  &&!winner){
        
        gameIsLive=false;
        winner=bottomLeft;
        statusDiv.innerHTML=`${bottomLeft}   has won`;
       
    }

    if (topLeft && topLeft===middleLeft && topLeft===bottomLeft  &&!winner){
        
        gameIsLive=false;
        winner=topLeft;
        statusDiv.innerHTML=`${topLeft}   has won`;
       
    }

    if (topMiddle && topMiddle===middleMiddle && topMiddle===bottomMiddle  &&!winner){
        
        gameIsLive=false;
        winner=topMiddle;
        statusDiv.innerHTML=`${topMiddle}   has won`;
       
    }

    if (topRight && topRight===middleRight && topRight===bottomRight  &&!winner){
        
        gameIsLive=false;
        winner=topRight;
        statusDiv.innerHTML=`${topRight}   has won`;
       
    }

    if (topLeft && topLeft===middleMiddle && topLeft===bottomRight  &&!winner){
        
        gameIsLive=false;
        winner=topLeft;
        statusDiv.innerHTML=`${topLeft}   has won`;
       
    }

    if (topRight && topRight===middleMiddle && topRight===bottomLeft  &&!winner){
        
        gameIsLive=false;
        winner=topRight;
        statusDiv.innerHTML=`${topRight}   has won`;
       
    }

    if (topRight && topLeft &&topMiddle&& middleLeft&& middleMiddle&&middleRight&&bottomLeft&&bottomMiddle&&bottomRight  &&!winner){
        
        gameIsLive=false;
        
        statusDiv.innerHTML="Game is Tie";
       
    }
 
    if (winner!==null || statusDiv.innerHTML=="Game is Tie"){
        document.querySelector('.game-grid').innerHTML="Game Over";
        document.querySelector('.game-grid').classList.add("gameover");
    }
};