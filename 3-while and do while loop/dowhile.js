//Do while loop is also used to iterate a block of code.
//do-while Loop: The loop body is executed at least once before the condition is checked.
//syntax: do{
// }
// while()
var animals = ["tiger", "lion", "zebra", "horse"];
var index = 0;
do {
    console.log(animals[index]);
    index++;
} while (index < animals.length);
