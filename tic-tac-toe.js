const squares = document.querySelectorAll("board");
const status = document.getElementById("status");
const button = document.getElementsByClassName("btn");

const p_X = "X";
const p_O = "O";
var playerX = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function restartGame()
{ 
    array_X = [];
    array_O = [];
    currentPlays = [];

    stat = document.getElementById("status"); 
    stat.innerHTML = "Move your mouse over a square and click to play an X or an O.";

    var squares = document.getElementById("board").children; 
    for (i = 0; i < squares.length; i++)
    {
        squares[i].className = "square"; 
        squares[i].innerHTML = "";
        squares[i].addEventListener('click',clickFunc,{once : true}); 
        squares[i].id = i;
    }
}

document.addEventListener("DOMContentLoaded",function()
{
    restartGame();
    button[i].addEventListener("click",restartGame);
})

// finalize conditional statement

}
