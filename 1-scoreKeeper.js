var p1Button = document.querySelector("#p1");
let p2Button = document.getElementById("p2");
let resetButton = document.getElementById("reset");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let numInput = document.querySelector("input");
let winningScoreDisplay = document.querySelector("p span");

let p1Score = 0;
let p2Score = 0;

let gameOver = false;
let winningScore = 5;

// ---------------------------------------------------------
p1Button.addEventListener("click", function () {
    if (!gameOver) { //條件成立的時候執行,預設gameOver為false,放入條件式中有 ! ,會轉為true
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function () {
    if (!gameOver) { //條件成立的時候執行,預設gameOver為false,放入條件式中有 ! ,會轉為true
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})

//這兩段程式碼尚未是最好的解法
//因為當中有很多重複的地方
//但目前只針對JS在這方面的作用
// ---------------------------------------------------------





resetButton.addEventListener("click", function () {
    reset();
})

function reset() { //把reset拉出來，是方便在resetButton和numInput中使用
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function () {
    winningScoreDisplay.textContent = this.value;

    //要加一個Number在於 p1Score === winningScore 中的三等號
    //如果不加number
    //numInput.value回傳的傳會是String
    //但Score是Number，兩者會不相等
    winningScore = Number(this.value);

    reset(); //每當改變上限值的時候，所有都跟著變動

})