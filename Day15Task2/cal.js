let outputScreen = document.getElementById("output-screen");

function append(num){
    outputScreen.value += num;
}

function evaluateAnswer(){
    try{
    outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid")
    }
}

function clear(){
    outputScreen.value = "";
}

function deleted(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}
