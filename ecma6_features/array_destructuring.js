var array1= [90,80,70,60,50,90,90];

// var i=array1[1]

// var j=array1[0]

// var k=array1[2]

//array destructuring syntax

var [i,j,k]=array1
console.log(i,j,k);

//assigning values based on the index

var[x, , ,y]=array1
console.log(x,y);

var [a,b,...c]=array1 //rest parameter
console.log(a,b,c);














