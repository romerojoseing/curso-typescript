// Nueva forma de tipado para JS
console.log("Hola Mundo");


/*-------------------- types - Tipos de Datos --------------------
si le asignamos un tipo de dato lo va tener asi por siempre (Siempre especificar los tipos de datos)
// el document.write solo muestra datos de tipo string asi que hay que convertirlo 
*/

// String
var string: string = "Hola Mundo";
string = 22 + "";

var myString: string;
myString = "Hello";


// Number
var number: number = 3;
number = 40;

var myNumber: number;
myNumber = 2;


// Boolean
var boolean: boolean = true;
boolean = false;

var myBoolean: boolean;
myBoolean = true;


// Any

var any: any = "hello";
any = false;

var myAny: any;
any = 22; 


// Arrays
var array: any[] = ["jose", 25, true, [], {}];
var arrayString: string[] = ["item1", "item2", "item3"];
var arrayNumber: number[] = [1, 2, 3, 4];
var arrayBoolean: boolean[] = [true, false, false];


// Tuple - Arreglo con estructura definida
var tuple: [string, number, boolean];
tuple = ["hola", 23, false];


// Void, Undefined, Null 
var myVoid: void = undefined;
var myNull: null = null;
var myUndefined: undefined = undefined;


/*-------------------- Funtions - Funciones --------------------*/
function suma(num1: number, num2: number): number {
    return num1 + num2;
}

let sum = function(
    num1: number | string,
    num2: number | string): number { 
        if(typeof(num1) === 'string'){
            num1 = parseInt(num1);
        }
        if(typeof(num2) === 'string'){
            num2 = parseInt(num2);
        }
        return num1 + num2;
    }

// Funcion con parametros opcionales
function getName(
    firstName: string,
    lastName?: string): string {
        if(lastName == undefined){
            return firstName;
        }
        return `${firstName} ${lastName}`;
    }

var allName = getName("romero");


/*-------------------- Interfaces --------------------
Estas son basicamente definir la estructura de un objeto
*/
interface ITodo {
    title: string;
    text: string;
}

function showTodo(todo: ITodo){
    console.log(`${todo.title} ${todo.text}`);
}

showTodo({
    title: 'Desarrollo Web',
    text: 'proyecto basado en componentes'
});


/*-------------------- Clases ---------------------*/
class User{
    private name: string;
    public email: string;
    protected age: number = 22;

    // Constructor
    constructor(name){
        this.name = name;
    }

    register(){
        console.log(`${this.name} is registered`);
    }

    showAge(){
        return this.age;
    }

    public ageInYears(){
        return this.age + ' years';
    }
}

// Instancia
var romero = new User("romero");

console.log(romero.ageInYears());