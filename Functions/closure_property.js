function remainder(a){
    return function inner(b) {
        return (a%b)
        
    }
}
var x=remainder(11)
var y=x(2)
console.log(y);