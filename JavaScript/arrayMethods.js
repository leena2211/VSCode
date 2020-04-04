let fruits = ['Orange','Lemon','Cherry','Mango'];
console.log(fruits);
fruits.push('Apple');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift('Orange');
console.log(fruits);

fruits.push('Apple');
console.log(fruits);

fruits.splice(2,0,'Kiwi','Banana');
console.log(fruits);

fruits.splice(1,3);
console.log(fruits);

let fruits2 = fruits.splice(1,3);
console.log(fruits);
console.log(fruits2);

//Concat two arrays

let array1 = [1,2,3,4];
let array2= [6,7,8];
let array3= [5,9];

console.log(array1.concat(array2));

console.log(array1.concat(array2,array3));
