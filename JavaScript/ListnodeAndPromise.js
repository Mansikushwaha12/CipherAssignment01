class ListNode {
    val;
    next;

    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class TestClass {
    head;

    constructor(head = null){
        this.head = head;
    }

    hasLast(){
        return this.head != null;
    }
    
    getLast() {
        if(!this.hasLast()){
            return null;

        }
        let current = this.head;
        while (current.next !== null){
            current = current.next;
        }
        let finalValue = current.val;

        current = this.head;
        while(current.next != null && current.next.next != null){
           current = current.next;
        }
        if(current.next != null && current.next.next !== null){
            this.head = null;
        }
        current.next = null;
        return finalValue;
    }

}

let myVar = new TestClass(
    new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
);

// console.log(myVar.getLast());
// console.log(myVar.getLast());
// console.log(myVar.getLast());
// console.log(myVar.getLast());
// console.log(myVar.getLast());


// promise
// promise is class in js
// constructor (function)

//  let myPromise = new Promise((resolve, unresolve) => {
//     let num1 = 10;
//     let num2 = 20;
//     let sum = num1 + num2;
//     if(sum > 24){
//         // resolve(sum);
//         resolve();
//     }
//     else{
//         // unresolve(new Error("Promise not resolve"));
//         unresolve();
//     }
//  });

 // then when promis resolve catch when promise not reslove
// myPromise.then(() => {
//     console.log("Promise was resolve");
// }).catch(()=>{
//     console.log("Promise was not resolve");
// });

// 5000 = 5sec
// function addTowNumber(num1,num2){
//     let sum = 0;
//     setTimeout(() => {
//         console.log(num1 + num2);
//         sum = num1 + num2;
//     }, 5000);
//     console.log("Inside addTowNumber");
//     return sum;
    
// }

// console.log(addTowNumber(2,3));


// using promise

function addTowNumber(num1,num2){
    let promise = new Promise((fulfilled, notfulfulled) =>{
        setTimeout(() =>{
            console.log("Inside setTimeout");
            fulfilled(num1+num2);
        },5000);
    });
    
}
addTowNumber(10,5)
    .then(() => {
        console.log("Promise was resolve");
    })
    .catch(()=>{
        console.log("Promise was not resolve");
    });
   

