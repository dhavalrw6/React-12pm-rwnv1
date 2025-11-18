let obj1 = {
    name : "Rohit",
    age : 21,
    address :{
        city : "Navsari"
    }
}


let temp = JSON.stringify(obj1);
let obj2 = JSON.parse(temp);

obj2.name = "Dhaval";
obj2.address.city = "Surat";

console.log("object 1",obj1);
console.log("object 2",obj2);