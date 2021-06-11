var arr1=[10,22,22.4,22.5];
console.log(Math.max(...arr1));

var arr2=[0,90,80,89,79]
console.log(Math.max(...arr1,678,...arr2));

var str="hello";
console.log([...str]);

console.log(Array.from(str));

function list() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(Array.from(arguments));
    console.log(...arguments);
}

list("name","fname","jname");