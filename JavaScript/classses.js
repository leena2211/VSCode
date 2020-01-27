class Employee{

    setDetails(name,id){
        this.name=name;
        this.id=id;
    }

    getName(){ //encapsulation method
        return this.name;
    }

    getId(){
        return this.id;
    }
}

let emp1 = new Employee();
let emp2 = new Employee();
emp1.setDetails("John",1001);
emp2.setDetails("Jony",1002);
console.log(emp1.getName());
console.log(emp1.getId());