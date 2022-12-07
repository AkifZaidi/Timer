var timer;
var userInput = document.getElementById("userInput");
var startInput;

function startCount() {
    timer = setInterval(starter, 1000);
    document.getElementById("countDown").innerHTML = userInput.value;
    startInput = userInput.value;
    userInput.value = "";
}

function starter(){
    startInput--
    document.getElementById("countDown").innerHTML = startInput;
    if(startInput == 0){
        pauseCount()
    }
}

function pauseCount(){
    clearInterval(timer)
}

function stopCount(){
    pauseCount()
    document.getElementById("countDown").innerHTML = "0";

}