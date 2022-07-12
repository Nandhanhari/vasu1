const person = {
    id : 1,
    name : "Vasu",
    age: 27
}
const hasKey = 'name' in person
if (hasKey){
    console.log("The Key Exists")
}
else {
    console.log("The key doesnt exist")
}
const hasKey2 = person.hasOwnProperty("age");
if(hasKey2) {
    console.log("The age key exist");
}
else {
    console.log(" The age key doesnt exist");
}