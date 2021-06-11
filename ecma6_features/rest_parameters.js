function sumAll(...args){
    let sum=0;
    for(var arg of args)
    sum=sum+arg;
    return sum;
}

console.log(sumAll(10,20,30,40,80,89,99,111));

function list(n1,n2,...names) {
    console.log(n1,n2);
    console.log(names.length);
    console.log(names[0]);
    console.log(names[1]);
}
list("sai","sree","jai","shiva","ram")

// function list2(...names,n8)   //rest parameter should be last parameter
// {
//     console.log(n8);
// }
// list2("a","b","c");

//ARGUMENTS variable
function list() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

list("name","fname","jname");


