let person ={
    name: "Kit",
    age: 21,
    eyecolor:"black",
    fullname: ()=>{
        return `${person.name}:${person.age}`;
    },
};

const x = person;
x.age = 30;
console.log(person.age);
console.log(x.fullname());

const numbers =[10,20,30];
function addFn(...num) {
    let sum =0;
    for(value of num) sum += value
    return sum;
}
console.log(addFn(10,20,30,40));

const [a,b] = [10,20,30];
console.log(b);

const {name: rName, age} = person;
console.log(rName);
