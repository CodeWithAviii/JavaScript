//There Are 2 Type Of Memory in js Stack,Heap 
//Stack -It is used in primitive data type.
//Heap -It is used in Non-primitive data type.

//stack memory
let price ="1cr";
let anotherPrice =price;
anotherPrice ="1.5cr";
console.log(price); //1cr
console.log(anotherPrice) //1.5cr

//In the case of stack memory the copy of variable value is place into new veriable.


// ---------------------Heap Memory-----------------
let std1={
    name:"Aviii",
    Age:21
}
let std2 =std1;

std2.Age =19;

console.log(`the age of student one is ${std1.Age}`); //19
console.log(`the age of student two is ${std2.Age}`); //19

