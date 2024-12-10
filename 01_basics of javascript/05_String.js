const name_1 = "Omkar"
const repoCount = 99

//console.log (name_1 + repoCount + "Value");

console.log ('Hello my name is ${name_1} and my repo count is ${repoCount}');

const gameName = new String ("Omkar S Ghanekar")

console.log(gameName[2]);
 /*as [2] the indexcing starts from 0 the asking index value show alphabet k */
console.log(gameName._proto_);

console.log (gameName.length);
// as the length show the number of character values stored into var gameName

console.log (gameName.toUpperCase());
// as the toUpperCase converts the value of string gameName into Upper Case 

console.log(gameName.charAt(2));
// this show that which character is being stored in indexing value 2 

console.log (gameName.indexOf('m'));
//This method shows the indexing number of the given character 

const newString = gameName. substring(0, 5)
console.log(newString);
//From substring method we can call the required character by giving the start and the end point of indexing

const OtherString = gameName.slice(4 , -2)
console.log( OtherString);
//Here the output will be r S Ghanekar according to the indexing of slicing given by us 

const newString1 ="Omkar Ghanekar"
console.log (newString1);
console.log (newString1.trim());

