//Enum is set of values that is used to return an index, or return a value or define index.
//syntax: enum name{

//}
// //advantages:
// Improved Readability.
// Type Safety.
// Maintainability.

enum Student{
huma,sara,saira,ayesha,
}

//----Enums return an index-----
//by giving a value ,you get the index.
const std1:Student=Student.huma;
console.log(std1);

const std2:Student=Student.ayesha;
console.log(std2);

const std3:Student=Student["sara"];
console.log(std3);

//-----Enums Return A Value-----
//by giving an index, you get a value.
const std4:String=Student[3];
console.log(std4);

const std5:string=Student[2];
console.log(std5);

//-----Define an index to the values specifically as:-
enum Color{
    red=8,green,yellow,
}
const clr1:Color=Color.yellow;
console.log(clr1);

const clr2:Color=Color.red;
console.log(clr2);

//----Define a value specifically as:-
enum Animals{
    cat="It is a pet animal.",
    dog="It is a faithful animal",
    horse="It is a beautiful animal",
    camel="It is a desert animal",
}
const animal1:Animals=Animals.cat;
console.log(animal1);

const animal2:Animals=Animals["camel"];
console.log(animal2);

//--- enum in function

enum vehicles{
    car="It is a land transport.",
    aeroplane="It is air transport.",
    ship="It is a water transport.",
}
function calling(parameter:string){
return parameter;
}
//invoke function.
console.log(calling(vehicles.ship));
//Author-Huma Mohsin