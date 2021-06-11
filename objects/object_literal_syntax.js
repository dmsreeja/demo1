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