class Employee{

    constructor(name,id){
        this.name=name;
        this.id=id;
    }
}

let emp1= new Employee('John','1001');
let emp2 = new Employee('Tom','1002');

console.log(emp1.name,emp1.id);
console.log(emp1.id);
console.log(emp2.name);
console.log(emp2.id);