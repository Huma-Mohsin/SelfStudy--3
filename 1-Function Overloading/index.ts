//Function overloading:-

//In JavaScript, function overloading refers to the ability to create multiple functions with the same name but different parameter lists.

//using function overloading:
function sum(a: string, b: string): string;
function sum(a: number, b: number): number;
function sum(a: any, b: any): any {
  return a + b;
}

sum(3, 4);
sum("Hello", "world"); //function overloading maintain data type.

//this can also be done by using union.

//function overloading:
function sum2(a: string, b: string): string;
function sum2(a: number, b: number): number;

function sum2(a: string | number, b: string | number): string | number {
  if (a == "number" && b == "number") {
    return a + b;
  } else {
    return `${a}${b}`;
  }
}
sum2(4, 5);
sum("hello", "Union Type"); //only by using union ,data ype is not maintained at invoke so we have to define function overloading here above so that data type is maintainable during invoke.

//Author-Huma Mohsin
