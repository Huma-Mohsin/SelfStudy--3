//Function overloading:-
function sum(a, b) {
    return a + b;
}
sum(3, 4);
sum("Hello", "world"); //function overloading maintain data type.
function sum2(a, b) {
    if (a == "number" && b == "number") {
        return a + b;
    }
    else {
        return "".concat(a).concat(b);
    }
}
sum2(4, 5);
sum("hello", "Union Type"); //only by using union ,data ype is not maintained at invoke so we have to define function overloading here above so that data type is maintainable during invoke.
//Author-Huma Mohsin
