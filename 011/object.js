// singleton 


// symbol
const mySym = Symbol("key1")
// object literals
const JsUser = {
    [mySym] : "mykey1",
    name :"swa",
    age : 18,
    address:"gad"
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser[mySym]);
console.log(JsUser);
JsUser.age = 18
Object.freeze(JsUser)
JsUser.age = 20
console.log(JsUser);