// Object destructuring

let myObject = {
    name: "Alex",
    age: "24",
    address: {
        stree: "Brooklyn",
        city: "New york",
        passportDetails: {
            passportNumber : "ABC6743",
        },
    },
};
// normal
let passportNum = myObject.address.passportDetails.passportNumber;
// console.log(passportNum);
// destructuring
let {name: myName, age} = myObject;
// console.log(myName,age);

// object Matching
let obj1 = {name: "Mansi"};
let obj2 = { name: "Mansi"};

function areEqual(obj1, obj2){
    if(obj1 == obj2){
        return true;
    }
    if(Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }
    for(let key of Object.keys(obj1)){
        if(typeof obj2[key] == "undefined"){
            return false;
        }
        if(obj2[key] != obj1[key]){
            return false;
        }
    }
    return true;
}
// console.log(areEqual(obj1,obj2));

// Map and set

let map = new Map();
map.set(1,"Mansi");
map.set(2,"Alex");
// console.log(map);

//set

let set  = new Set();
set.add(1);
set.add(-1);
set.has();
// // 
// console.log(set);

// Class

class Animal{
    noOfLegs;
    color;
    family;

    constructor(noOfLegs,color,family){
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        
    }

}
let animal = new Animal(4,"brown","rodent");
console.log(animal);



