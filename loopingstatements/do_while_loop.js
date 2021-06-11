
// Program to reverse the number
var num=12344;
var i=0;
var n=0;
do{
    n=num%10;
    i=i*10+n;
    num=Math.floor(num/10);
}while(num>0)
console.log(i);
