//Enum is set of values that is used to return an index, or return a value or define index.
//syntax: enum name{
//}
// //advantages:
// Improved Readability.
// Type Safety.
// Maintainability.
var Student;
(function (Student) {
    Student[Student["huma"] = 0] = "huma";
    Student[Student["sara"] = 1] = "sara";
    Student[Student["saira"] = 2] = "saira";
    Student[Student["ayesha"] = 3] = "ayesha";
})(Student || (Student = {}));
//----Enums return an index-----
//by giving a value ,you get the index.
var std1 = Student.huma;
console.log(std1);
var std2 = Student.ayesha;
console.log(std2);
var std3 = Student["sara"];
console.log(std3);
//-----Enums Return A Value-----
//by giving an index, you get a value.
var std4 = Student[3];
console.log(std4);
var std5 = Student[2];
console.log(std5);
//-----Define an index to the values specifically as:-
var Color;
(function (Color) {
    Color[Color["red"] = 8] = "red";
    Color[Color["green"] = 9] = "green";
    Color[Color["yellow"] = 10] = "yellow";
})(Color || (Color = {}));
var clr1 = Color.yellow;
console.log(clr1);
var clr2 = Color.red;
console.log(clr2);
//----Define a value specifically as:-
var Animals;
(function (Animals) {
    Animals["cat"] = "It is a pet animal.";
    Animals["dog"] = "It is a faithful animal";
    Animals["horse"] = "It is a beautiful animal";
    Animals["camel"] = "It is a desert animal";
})(Animals || (Animals = {}));
var animal1 = Animals.cat;
console.log(animal1);
var animal2 = Animals["camel"];
console.log(animal2);
//--- enum in function
var vehicles;
(function (vehicles) {
    vehicles["car"] = "It is a land transport.";
    vehicles["aeroplane"] = "It is an aerial transport.";
    vehicles["ship"] = "It is a water transport.";
})(vehicles || (vehicles = {}));
function calling(parameter) {
    return parameter;
}
//invoke function.
console.log(calling(vehicles.ship));
