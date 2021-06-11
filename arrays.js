
var arr1= new Array() //array declaration
arr1[0] = 10
arr1[1]=23.7
arr1[2]="a"
arr1[3]="array"

console.log(arr1);

arr1[2]="hai"

console.log(arr1);


var arr1=new Array(10,23.7,"a","hello")
console.log(arr1);

var arr2=new Array(5)
console.log(arr2);

var arra3=[5,"hai",["a","e","i","o","u"],true,{name : "sreeja",skill:"java,selenium"},null,undefined]
console.log(arra3);

for (var index = 0; index < arra3.length; index++) {
   console.log(arra3[index]);
    
}
var i=0
while(i<arra3.length){
    console.log(arra3[i]);
    i++
}

var i=0
do{
    console.log(arra3[i]);
    i++
}while(i<arra3.length)

