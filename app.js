// Nueva forma de tipado para JS
console.log("Hola Mundo");
/*-------------------- types - Tipos de Datos --------------------
si le asignamos un tipo de dato lo va tener asi por siempre (Siempre especificar los tipos de datos)
// el document.write solo muestra datos de tipo string asi que hay que convertirlo
*/
// String
var string = "Hola Mundo";
string = 22 + "";
var myString;
myString = "Hello";
// Number
var number = 3;
number = 40;
var myNumber;
myNumber = 2;
// Boolean
var boolean = true;
boolean = false;
var myBoolean;
myBoolean = true;
// Any
var any = "hello";
any = false;
var myAny;
any = 22;
// Arrays
var array = ["jose", 25, true, [], {}];
var arrayString = ["item1", "item2", "item3"];
var arrayNumber = [1, 2, 3, 4];
var arrayBoolean = [true, false, false];
// Tuple - Arreglo con estructura definida
var tuple;
tuple = ["hola", 23, false];
// Void, Undefined, Null 
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
/*-------------------- Funtions - Funciones --------------------*/
function suma(num1, num2) {
    return num1 + num2;
}
var sum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// Funcion con parametros opcionales
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
var allName = getName("romero");
function showTodo(todo) {
    console.log(todo.title + " " + todo.text);
}
showTodo({
    title: 'Desarrollo Web',
    text: 'proyecto basado en componentes'
});
/*-------------------- Clases ---------------------*/
var User = /** @class */ (function () {
    // Constructor
    function User(name) {
        this.age = 22;
        this.name = name;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    User.prototype.showAge = function () {
        return this.age;
    };
    User.prototype.ageInYears = function () {
        return this.age + ' years';
    };
    return User;
}());
// Instancia
var romero = new User("romero");
console.log(romero.ageInYears());
