
//Example to find number of digits in a given number
var num=12345667889;
var count=0;
while(num>0){
    count++;
    num=Math.floor(num/10);
}
console.log(count);