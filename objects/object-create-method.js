var apartment = {
    name: "sri lakshmi",
    nooffloors:10,
    colorofapartment: "green",
    owned: 12,
    vacant: 34,
    empty : function () {
        console.log("vacant houses"+this.vacant);
        }
}
var inv=Object.create(apartment)
console.log(inv);