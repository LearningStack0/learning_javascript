var num = 5
console.log(num);

let x = 20
console.log(x)

//tipos de datos
let miEntero = 7;
console.log(miEntero);
console.log(typeof miEntero); // Muestra "number"

let miFlotante = 3.14;
console.log(miFlotante);

let miCadena = "Hola, mundo!";
console.log(miCadena);

let miBooleano = true;
console.log(miBooleano);

let miArreglo = [1, 2, 3, 4, 5];
console.log(miArreglo);

let miObjeto = { nombre: "Juan", edad: 30 };
console.log(miObjeto);

let miNull = null;
console.log(miNull);
console.log(typeof miNull); // Muestra "object"

let miUndefined;
console.log(miUndefined);
console.log(typeof miUndefined); // Muestra "undefined"


//HOISTING
//podemos inicializar la variable y despues usarla
//solo funciona con var, no con let ni const
var v;
v = 10;
console.log(v); 

//CONSTANTES
const MI_CONSTANTE = 100;
console.log(MI_CONSTANTE);

//MI_CONSTANTE = 200; // Esto generar un error, ya que no se puede reasignar una constante

console.log(Math.PI); // Muestra el valor de PI de la libreria Math de 

//OPERADORES 
//OPERADORES ARITMETICOS

//suma
a = 3 + 4;
console.log(a);

//resta
b = 10 - 5;
console.log(b);

//multiplicacion
c = 6 * 7;
console.log(c);

//division
d = 20 / 4;
console.log(d);

//modulo
e = 10 % 3;
console.log(e);

//incremento
f = 5;
f++;
console.log(f);

//decremento
g = 10;
g--;
console.log(g);     

//potencia
h = 2 ** 3;
console.log(h); //2 * 2 * 2 = 8

//OPERADORES DE ASIGNACION
let i = 10;
i += 5; // Equivalente a i = i + 5
console.log(i);

let j = 20;
j -= 10; // Equivalente a j = j - 10
console.log(j);

let k = 5;
k *= 3; // Equivalente a k = k * 3
console.log(k);
