var person=new Object()

person.fname="dodla"
person.lname="sreeja"
person["address"]="karnataka"

person.skillset=["java","selenium","javascript"]

person.fullname = function (){
    console.log(this.fname+" "+this.lname);
}

console.log(person);
person.fullname()