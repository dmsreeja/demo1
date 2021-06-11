var arr1=[1,22.30,1.3,"hello",true,null,undefined]
var arr2=[2,4,6,8,10]
 var result = arr1.every((elements) => {
     return elements>0
 })
 console.log(result);

console.log(arr2.every((elements) => {   //every method
    return elements%2==0
}));
 

console.log(arr1.some((item) => {return item%2==0}))

arr1.forEach((element,index)=>{
    console.log(index+":"+element);
})


console.log(arr1.map((element)=>{
return element*2
}))











console.log(arr1.length); //length of array

arr1.push(0.001,null,false,["j","a","v","a"]) //adding elements to the array at the end

console.log(arr1);


arr1.unshift("a","k",[1,3,4],"heyya") //addimg the elements at the beginning of the array

console.log(arr1);

console.log(arr1.pop());   //removes the last element in the array

console.log(arr1);

console.log(arr1.shift());   //removes the element at the start of the array






