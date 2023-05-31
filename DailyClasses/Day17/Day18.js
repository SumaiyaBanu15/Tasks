// let promise = new Promise((resolve, reject) => 
// {
//     let result = 4;

//     if(result > 10){
//         resolve(result);
//     }
//     else{
//         reject('Result is not greater than 10');
//     }
// });

// promise
//    .then(result => console.log('Result: ',result))
//     .catch(error => console.log('Error: ', error))

// let promise = new Promise((resolve, reject) => {

//     let value = 10;

//     if(value = positive)
//     {
//         resolve(value);
//     }
//     else{
//         reject('VAlue is negative');
//     }
// });

// promise
// .then(value => console.log('Result: ', value))
// .cathc(error => console.log('Error : ', error))


let checkValue = (value) =>
{
    return new Promise((resolve,reject) =>{
        
    })
}

 checkValue(-7)
 .then(
    (value)=> console.log(`${value}, message`))
    .catch((error) => console.log(`${value}, message`))