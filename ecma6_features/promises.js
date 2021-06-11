// console.log("start");

// setTimeout(()=>{
//     console.log("hai");
// },3000)

// console.log("end");

// setInterval(() => {
//     console.log("hai");
// }, 3000);

//declare a promise in JS:
var promise = new Promise((resolve,reject)=> {
  var x="5";
  var y=5;
  if(x===y) //checks the value along with type also
  resolve("x and y are equal");
  else
  reject("x and y are not equal");
});

promise.then((msg)=>{console.log(msg);}).catch((msg)=>{
    console.log(msg);
})