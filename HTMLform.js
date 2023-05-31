let heading = document.createElement('div');
heading.setAttribute('class','container');
document.body.appendChild(heading);

let h2 = document.createElement('h2');
h2.textContent="HTML FORM";
h2.setAttribute('class','h2');
heading.appendChild(h2);

let form = document.createElement('form');

let userInput = document.createElement('div');

let nameDiv = document.createElement('div');
nameDiv.setAttribute('class','mb-3');

let labelName = document.createElement('label');
labelName.setAttribute('class','col-sm col-form-label text-bg-secondary p-3');
labelName.textContent="Name";

let inputName1 = document.createElement('input');
inputName1.setAttribute('class','form-control');
inputName1.setAttribute('type', 'text');
inputName1.setAttribute('placeholder','First Name');

let inputName2 = document.createElement('input');
inputName2.setAttribute('class','form-control');
inputName2.setAttribute('type', 'text');
inputName2.setAttribute('placeholder','Last Name');

nameDiv.append(labelName,inputName1,inputName2);


let mailDiv = document.createElement('div');
mailDiv.setAttribute('class', 'mb-3');

let labelMail = document.createElement('label');
labelMail.setAttribute('class','form-label text-bg-secondary p-3');
labelMail.textContent="Mail";

let inputMail = document.createElement('input');
inputMail.setAttribute('class','form-control');
inputMail.setAttribute('type', 'mail');
inputMail.setAttribute('placeholder','Your Mail Id');

mailDiv.append(labelMail,inputMail);


let genderDiv = document.createElement('div');
genderDiv.setAttribute('class', 'mb-3');

let labelGender = document.createElement('label');
labelGender.setAttribute('class','form-label text-bg-secondary p-3');
labelMail.textContent="Gender";

let inputGender1 = document.createElement('input');
inputGender1.setAttribute('class','form-check-input');
inputGender1.setAttribute('class','form-check-label');
inputGender1.setAttribute('type', 'radio');
inputGender1.setAttribute('value','Male');
inputGender1.setAttribute('name','radioButton');

let inputGender2 = document.createElement('input');
inputGender2.setAttribute('class','form-check-input');
inputGender2.setAttribute('class','form-check-label');
inputGender2.setAttribute('type', 'radio');
inputGender2.setAttribute('value','Female');
inputGender2.setAttribute('name','radioButton');

genderDiv.append(labelGender,inputGender1,inputGender2);






userInput.append(nameDiv,mailDiv,genderDiv);

form.appendChild(userInput);

heading.appendChild(form);
