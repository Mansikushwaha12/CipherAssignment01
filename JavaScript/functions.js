// Map()

// let array = [5,10,4,5];
// let newArray = [];

//by for loop
// for(let i = 0; i < array.length; i++){
//     newArray[i] = array[i] * array[i];
// }
 

// console.log(newArray);

let array = [5,10,4,5];
// in js a function is also a js object
// function functionForMap(ele){
//     return ele * ele;
// }
// let newArray = array.map(functionForMap);
// directly pass
let newArray = array.map((ele) => ele*ele);
// console.log(newArray);

// forEach()
// forEach does not return 
let array1 = [1,2,3,4];
array1.forEach((ele) => {
    // console.log(ele * ele);
})
// console.log(array1);

// .filter()

let a = [20,30,10,50];
let  newArray1 = a.filter((ele) =>{
    return ele >= 30;
});
// console.log(newArray1);

// .find()

let b = [10,20,30,40];
let temp = b.find((value) => {
    return value > 20;
});

// console.log(temp);

// .sort()
// it sort all the value according to the string value 
let c = [30,50,20,70,111];
let sortedArray = c.sort();
// console.log(sortedArray);

let d = [30,50,20,70,111];
let sortedArray1 = c.sort((ele1,ele2) =>{
    // number is class in js
    ele1 = Number(ele1);
    ele2 =Number(ele2);
    return ele1 - ele2;
});

console.log(sortedArray1);


