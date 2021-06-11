var book={
    name:"notebook",
    noOfPages:200,
    type:"unruled",
    price:20,
    color: function () {
        console.log("orange");
        
    }
}

var {price,name}=book;
console.log(price,name); //deriving the properties


var {type:newType,price:newPrice}=book;
console.log(newType,newPrice);