class employee{
    product_id = 102;
    name = "Vasu";
}
console.log(new employee());
/* This is pointer refering to current Object*/
class employee2 {
    Name2 = "Narshima";
    Sal2 = 45000;
    loc2 = "Bangalore"; 
}
let e2 = new employee2();
console.log(e2)
console.log('e1' + 'e2')

/* This is defining object*/
let person = {
    fist_name: 'Hari',
    Last_name : 'Mukul'

getFunction : function(){
        return (`The name of the person is
          ${person.first_name} ${person.last_name}`)
}
}
console.log(person.getFunction());



