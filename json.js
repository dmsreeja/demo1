var bus = {
    name: "AP031234",
    pickup: "bangalore",
    dest: "tirupati",
    noofpassengers: 34,
    totalseats: 45,
    availableseats: function () {
        console.log("total available seats are"+this.totalseats+"occupied seats are"+this.noofpassengers);
        }
}
console.log(bus);

var jsonbus = JSON.stringify(bus)     //converts javascript object to JSON object string
 console.log(jsonbus);                   // accepts javascript object as a parameter
var jsbus = JSON.parse(jsonbus)       //converts JSON string to javascript object
 console.log(jsbus);                 // accepts json string as a  javascript object