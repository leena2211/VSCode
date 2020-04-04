let age=18;
let starRating=4;
let i;

//if ...else loop
if(age<18){
    console.log("Not eligible for driving licence");
}else if(age>=18){
    console.log("Eligible for driving licence");
}else{
    console.log("Entered wrong data");
}

//Switch Case
switch(starRating){
    case 1:
        console.log("Very Bad");
        break;
    case 2:
        console.log('Bad');
        break;
    case 3:
        console.log('Average');
        break;
    case 4:
        console.log('Good');
        break;
    default:
        console.log('Enter the valid number');
} 

//for loop

for(i=1;i<=10;i++){
    console.log('Value of i:'+i);
}

let fruits = ['Apple','Banana','Pineapple','Strawberry'];
let x;
for(x in fruits){
    console.log(fruits[x]);
}

for(x of fruits){
    console.log(x);
}

//while loop

let counter=1;

while(counter <=10){
    console.log(counter);
    counter++;
}

//Do ..while loop
let counter1=1;
do{
    console.log(counter1);
    counter1++;
}while(counter1<=10);