class Employee{

    setEmployeeDetails(name,id,age,phoneNo){
        this.name=name;
        this.id=id;
        this.age=age;
        this.phoneNo=phoneNo;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
}

let emp1= new Employee();
emp1.setEmployeeDetails('John','1001',36,9829873456);
console.log(emp1.getName());
console.log(emp1.getId());