//AND (Double ampersand) (&&) first falsy value or last truthy if all values are truthy


//OR(||) (double pipe)  first truthy value or last falsy value if all are falsy
                    
 console.log("" && "hello"); // first falsy value ("")
 console.log("" || "hello"); // the first truthy value ("hello")
 console.log(0 || 7); //first truthy(7)
 console.log("hey there" && "false" && true);// the first truthy value (true)
 console.log(0 || "" || "false");//first truthy ("false")

let age = 10;

console.log(age >= 18 && age <= 35 );// the first falsy value (18) 
console.log(age <20 || age > 60);// first truthy value (20)
console.log(age <10 && "you are a child");//first falsy value 
console.log(age >= 18 && "you are an adult");//first falsy value
console.log(age >= 18 && age <= 35 && "you are among the youth");//first falsy value
console.log(age >= 18 && age <= 35 || "you are not youth");//the first one is falsy it returns to truthy thus printing "you are not  youth"
