let num= [10,5,15,20,100];
let x=0;
let y=1;
let tempMax;
let tempMin;

if(num[x]>num[y]){
    tempMax=num[x];
    tempMin=num[y];
}else{
    tempMax=num[y];
    tempMin=num[x];
}

for(x=2;x<num.length;x++){
    if(tempMax < num[x]){
        tempMax=num[x];
    }else if(tempMin>num[x]){
        tempMin=num[x];
    }
}

console.log("Max :"+tempMax);
console.log("Min :"+tempMin);