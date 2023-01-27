// const myName = "john";

// console.log(myName);
// myName = "Alex";
// console.log(myName);

// const myName = 4;  // in const not allow to redeclare and reassign the variables

// let myName = "john";
// console.log(myName);
// myName = "Alex";
// console.log(myName); 
 //in let not allow to redeclare but we can  reassign the variables
//  let myName = "abc";  // throw error ---- can not redeclare 

var myName = "john";
// console.log(myName);
var myName = " Alex";
myName = 6;
// console.log(myName); // we can redeclare and reassign 

// String Interpolation
let firstName = "Mansi";
let LastName = "Kushwaha";
// console.log(`${firstName} ${LastName}`);

// default params
// function addTowNumber(num1, num2){
//     return num1 + num2;
// }

//arrow function
// let addTowNumber = (num1, num2) =>{
//     return num1 + num2;
// }
// implicit return 
// let addTowNumber = (num1, num2) => num1 + num2;

// default argument
let addTowNumber = (num1, num2 = 4) =>{
    console.log(num1);
    console.log(num2);
    return num1 + num2;

}

// console.log(addTowNumber(1)); // -- if we not pass num2 value 
// console.log(addTowNumber(1,10));

//Rest and Spread Operator are applicable arrays and objects
let array = [4,5,6,8,10];
let newArray = [20,9,...array];
// Spread ---denoted as ----> ... 3 dot
// console.log(newArray);
// console.log(...array);
// console.log(array);   

// Rest also denoted as ---> ... 3 dot

let maxOfNumbers = (...numbers) => {
            let maximum = Number.MIN_VALUE;
            for(let number of numbers){
                maximum = Math.max(maximum,number);
            }
            return maximum;
};

// console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10));

//Spread opertor for object
let object = {
    name: "john",
    age: 24,
    address: {
        city: "New York",
        state:"NY",
        country:"USA"
    },
    

};

// let object2 = {...object, country: "USA"};
// name override
// let object2 = {...object, name:"Tom"};

// console.log(object2);

let object2 = JSON.parse(JSON.stringify(object));
object2.address.city = "Newark";
// console.log(object);
// console.log(object2);




