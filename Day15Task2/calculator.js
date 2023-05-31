// let outputScreen = document.getElementById("output-screen");

// function append(num){
//     outputScreen.value += num;
// }

// function evaluateAnswer(){
//     try{
//     outputScreen.value = eval(outputScreen.value);
//     }
//     catch(err){
//         alert("Invalid")
//     }
// }

// function clear(){
//     outputScreen.value = "";
// }

// function deleted(){
//     outputScreen.value = outputScreen.value.slice(0,-1)
// }


// function append(value)
// {
//     let result = document.getElementById('result');
//     result.value += value;
// }

// function evaluateAnswer(){
//     let result = document.getElementById('result');
//     result.value = eval(result.value);
// }

// let containerDIV = document.createElement('div');

// containerDIV.setAttribute('class','container');
// containerDIV.classList.add('text-center');

// // Row 1 ==> input field
//     let rowDIV1 = document.createElement('div');
//     rowDIV1.setAttribute('class', 'row');

//     let colDIV = document.createElement('div');
//     colDIV.setAttribute('class', 'col-12');

//     let inputElement = document.createElement('input');
//     inputElement.setAttribute('type','text');
//     inputElement.setAttribute('class','form-control');

//     colDIV.appendChild(inputElement);
//     rowDIV1.appendChild(colDIV);

//     containerDIV.appendChild(rowDIV1);

// // Row 2 ==> button Ac,DEL,Divide(/)

//     let rowDIV2 = document.createElement('div');
//     rowDIV2.setAttribute('class', 'row');

//     let colDIV1 = document.createElement('div');
//     colDIV1.setAttribute('class', 'col');

//     let buttonAC = document.createElement('input');
//     buttonAC.setAttribute('type','button');
//     buttonAC.setAttribute('class','form-control');
//     buttonAC.classList.add('spanTwo')
//     buttonAC.textContent='Ac';

//     colDIV1.appendChild(buttonAC);
//     rowDIV2.appendChild(colDIV1);


//     let colDIV2 = document.createElement('div');
//     colDIV2.setAttribute('class', 'col');

//     let buttonDEL = document.createElement('input');
//     buttonDEL.setAttribute('type','button');
//     buttonDEL.setAttribute('class','form-control');
//     buttonDEL.textContent='DEL';

//     colDIV2.appendChild(buttonDEL);
//     rowDIV2.appendChild(colDIV2);


//     let colDIV3 = document.createElement('div');
//     colDIV3.setAttribute('class', 'col');

//     let buttonDivide = document.createElement('input');
//     buttonDivide.setAttribute('type','button');
//     buttonDivide.setAttribute('class','form-control');
//     buttonDivide.textContent='/';

//     colDIV3.appendChild(buttonDivide);
//     rowDIV2.appendChild(colDIV3);

//     containerDIV.appendChild(rowDIV2);

// // Row 3 ==> Button 1,2,3,*


//     let rowDIV3 = document.createElement('div');
//     rowDIV3.setAttribute('class', 'row');

//     let colDIV4 = document.createElement('div');
//     colDIV4.setAttribute('class', 'col');

//     let button1 = document.createElement('input');
//     button1.setAttribute('type','button');
//     button1.setAttribute('class','form-control');
//     button1.textContent = 1;

//     colDIV4.appendChild(button1);
//     rowDIV3.appendChild(colDIV4);


//     let colDIV5 = document.createElement('div');
//     colDIV5.setAttribute('class', 'col');

//     let button2 = document.createElement('input');
//     button2.setAttribute('type','button');
//     button2.setAttribute('class','form-control');
//     button2.textContent = 2;

//     colDIV5.appendChild(button2);
//     rowDIV3.appendChild(colDIV5);


//     let colDIV6 = document.createElement('div');
//     colDIV6.setAttribute('class', 'col');

//     let button3 = document.createElement('input');
//     button3.setAttribute('type','button');
//     button3.setAttribute('class','form-control');
//     button3.textContent = 3;

//     colDIV6.appendChild(button3);
//     rowDIV3.appendChild(colDIV6);


//     let colDIV7 = document.createElement('div');
//     colDIV7.setAttribute('class', 'col');

//     let buttonMutliply = document.createElement('input');
//     buttonMutliply.setAttribute('type','button');
//     buttonMutliply.setAttribute('class','form-control');
//     buttonMutliply.textContent = '*';

//     colDIV7.appendChild(buttonMutliply);
//     rowDIV3.appendChild(colDIV7);


//     containerDIV.appendChild(rowDIV3);

// // Row 4 ==> Button 4,5,6,+

//     let rowDIV4 = document.createElement('div');
//     rowDIV4.setAttribute('class', 'row');

//     let colDIV8 = document.createElement('div');
//     colDIV8.setAttribute('class', 'col');

//     let button4 = document.createElement('input');
//     button4.setAttribute('type','button');
//     button4.setAttribute('class','form-control');
//     button4.textContent = 4;

//     colDIV8.appendChild(button4);
//     rowDIV4.appendChild(colDIV8);


//     let colDIV9 = document.createElement('div');
//     colDIV9.setAttribute('class', 'col');

//     let button5 = document.createElement('input');
//     button5.setAttribute('type','button');
//     button5.setAttribute('class','form-control');
//     button5.textContent = 5;

//     colDIV9.appendChild(button5);
//     rowDIV4.appendChild(colDIV9);


//     let colDIV10 = document.createElement('div');
//     colDIV10.setAttribute('class', 'col');

//     let button6 = document.createElement('input');
//     button6.setAttribute('type','button');
//     button6.setAttribute('class','form-control');
//     button6.textContent = 6;

//     colDIV10.appendChild(button6);
//     rowDIV4.appendChild(colDIV10);

//     let colDIV11 = document.createElement('div');
//     colDIV11.setAttribute('class', 'col');

//     let buttonPlus = document.createElement('input');
//     buttonPlus.setAttribute('type','button');
//     buttonPlus.setAttribute('class','form-control');
//     buttonPlus.textContent = '+';

//     colDIV11.appendChild(buttonPlus);
//     rowDIV4.appendChild(colDIV11);

//     containerDIV.appendChild(rowDIV4);

// // Row 5 ==> Button 7,8,9,-

//     let rowDIV5 = document.createElement('div');
//     rowDIV5.setAttribute('class', 'row');


//     let colDIV12 = document.createElement('div');
//     colDIV12.setAttribute('class', 'col');

//     let button7 = document.createElement('input');
//     button7.setAttribute('type','button');
//     button7.setAttribute('class','form-control');
//     button7.textContent = 7;

//     colDIV12.appendChild(button7);
//     rowDIV5.appendChild(colDIV12);


//     let colDIV13 = document.createElement('div');
//     colDIV13.setAttribute('class', 'col');

//     let button8 = document.createElement('input');
//     button8.setAttribute('type','button');
//     button8.setAttribute('class','form-control');
//     button8.textContent = 8;

//     colDIV13.appendChild(button8);
//     rowDIV5.appendChild(colDIV13);

//     let colDIV14 = document.createElement('div');
//     colDIV14.setAttribute('class', 'col');

//     let button9 = document.createElement('input');
//     button9.setAttribute('type','button');
//     button9.setAttribute('class','form-control');
//     button9.textContent = 9;

//     colDIV14.appendChild(button9);
//     rowDIV5.appendChild(colDIV14);


//     let colDIV15 = document.createElement('div');
//     colDIV15.setAttribute('class', 'col');

//     let buttonSub = document.createElement('input');
//     buttonSub.setAttribute('type','button');
//     buttonSub.setAttribute('class','form-control');
//     buttonSub.textContent = '-';

//     colDIV15.appendChild(buttonSub);
//     rowDIV5.appendChild(colDIV15);


//     containerDIV.appendChild(rowDIV5);

// // Row 6 ==> Button .,0,=

//     let rowDIV6 = document.createElement('div');
//     rowDIV6.setAttribute('class', 'row');

//     let colDIV16 = document.createElement('div');
//     colDIV16.setAttribute('class', 'col');

//     let buttonDot = document.createElement('input');
//     buttonDot.setAttribute('type','button');
//     buttonDot.setAttribute('class','form-control');
//     buttonDot.textContent = '.';

//     colDIV16.appendChild(buttonDot);
//     rowDIV6.appendChild(colDIV16);


//     let colDIV17 = document.createElement('div');
//     colDIV17.setAttribute('class', 'col');

//     let button0 = document.createElement('input');
//     button0.setAttribute('type','button');
//     button0.setAttribute('class','form-control');
//     button0.textContent = 0;

//     colDIV17.appendChild(button0);
//     rowDIV6.appendChild(colDIV17);


//     let colDIV18 = document.createElement('div');
//     colDIV18.setAttribute('class', 'col');

//     let buttonEqual = document.createElement('input');
//     buttonEqual.setAttribute('type','button');
//     buttonEqual.setAttribute('class','form-control');
//     buttonEqual.textContent = '=';

//     colDIV18.appendChild(buttonEqual);
//     rowDIV6.appendChild(colDIV18);



//     containerDIV.appendChild(rowDIV6);



// document.body.appendChild(containerDIV);