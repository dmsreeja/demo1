
var ar=[1,2,3, , , , 8, ]
for (var key in ar) {
    console.log(ar[key]);  //prints only keys excluding spaces
        }
for (let index = 0; index < ar.length; index++) {
    console.log(ar[index]);  //prints all the elements in the array
    
}