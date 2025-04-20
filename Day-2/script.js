const countDisplay =  document.getElementById('counter');
const countIncrease = document.getElementById('increase')
const countDecrease = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

let count = 0;


countIncrease.addEventListener("click", function () {
    count++;
    updateDisplay()
})

countDecrease.addEventListener("click", function() {
    count--;
    updateDisplay()
})

resetBtn.addEventListener("click", function () {
    count = 0;
    updateDisplay()
})

function updateDisplay() {
    countDisplay.textContent = count;
}