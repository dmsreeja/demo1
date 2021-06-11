var university1={
    name: "xyz university",
    recog: "central board",
    noofstudents: 2300,
    about: function () {
        console.log("university name"+this.name+"affliated to"+this.recog);
        }
}

var univer2={
    name:"abc university",
    recog:"state board",
    noofstudents: 12000,
}
function display() {
    console.log("university name"+this.name+"affliated to"+this.recog);
    console.log(arguments);
}

display.call(univer2,"class",54,"name")

var ret=display.bind(university1)
ret()

display.apply(univer2,["class",54,"name"])
