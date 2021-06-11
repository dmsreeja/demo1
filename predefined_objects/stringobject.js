var fname="sreeja"
var mname="murali"
var lname="dodla"
var ffname="Sreeja"


console.log(fname.length);       //length of the string

console.log(fname.concat(lname));

console.log(fname.concat(lname,mname,"myname"));  // concatenation of 2 or more strings

console.log(fname.charAt(5)); // displays the character at the index and it wont throw an error if we give wrong index

console.log(fname.charCodeAt(2)); //returns ascii code of character in specified index

console.log(fname.localeCompare(lname));

console.log(fname.replace("s"," S"));

console.log(fname.repeat(2));

console.log(fname.split("e"));

console.log(fname.indexOf("s"));

console.log(lname.indexOf("d",1));

console.log(fname.lastIndexOf("e",6));

console.log(fname.substr(0,5));

console.log(fname.substr(3,2));

console.log(fname.trim());

console.log(fname.slice(3,2))
