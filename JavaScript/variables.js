let x,y;
x=10;
y=5;

let sum= x+y;
console.log("Sum is "+sum);
console.log(x < y);
let result= x > y ? x:y
console.log(result);

let fruits= ['Apple','Banana','Orange'];
console.log(fruits);
fruits.pop(); // removes last element in array
fruits.push('Cherry'); //adds element in end 
fruits.shift();//removes the first element
fruits.unshift('Lemon');//adds element in beginning 
delete fruits[1]; //delete the element on that index and keep the index empty
console.log(fruits);
fruits[1]= 'Orange'; //add the element in empty index
fruits.slice(0,1); //remove the elements from from 1st index to second one
fruits.slice(2,0,'Orange','Cherry'); //index 2 means adding 2 element and 0 index means to delete the no elements
console.log(fruits.length);

let z;

for(z in fruits){
    //array with index required
    console.log(fruits[z]);
}

for(z of fruits){
    //need only index to print
    console.log(z);
}

let cars = new Array('Ford','Honda','Toyota');
console.log(cars);
console.log(cars[1]);

//Concat 2 arrays

let evenNumber = [2,4,6];
let oddNumber = [1,3,5];

let number = evenNumber.concat(oddNumber);
console.log(number);