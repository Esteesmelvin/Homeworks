//Array Functions: Las funciones de Array en JavaScript son funciones predefinidas que se pueden utilizar para manipular y trabajar con arreglos.

//Funcion .at(): Recibe como parámetro un array y una serie de índices, y devuelve los elementos del array correspondientes a esos índices.

let arr = [1, 2, 3, 4, 5];
let result = arr.at(arr, [0, 2, 4]); // [1, 3, 5]

console.log(result)

//Funcion .concat(): Se utiliza para unir dos o más arrays en uno solo. Devuelve un nuevo array que contiene los elementos de los arrays originales en el orden en que aparecen. 

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);
console.log(`2. El array 3 será: ${array3}`); // Output: [1, 2, 3, 4, 5, 6]

//Función Array(): Se utiliza para crear un nuevo objeto de tipo Array. Es un constructor que se utiliza para crear un array vacío o inicializar un array con valores específicos.

let array = new Array(1, 2, 3);
console.log(`3. El nuevo arreglo es: ${array}`)

/*Funcion copyWithin(): Se utiliza para copiar elementos de un array dentro del mismo array. Esta función modifica el array original y no devuelve un nuevo array.

La función toma tres argumentos:

- Primer argumento es el índice de destino, es decir, el lugar en el que se copiarán los elementos.
- El segundo argumento es el índice de inicio, es decir, el lugar desde donde se copiarán los elementos.
- El tercer argumento es el índice final, es decir, el lugar hasta donde se copiarán los elementos.*/

let arraycopy = [1, 2, 3, 4, 5];
arraycopy.copyWithin(0, 1, 4);
console.log(`4. Retorna lo siguiente: ${arraycopy}`); // Output: [2, 3, 4, 4, 5]

//Funcion entries(): Es un método de los objetos Array que devuelve un objeto de tipo Iterator, el cual contiene pares clave-valor para cada elemento en el array. Cada par clave-valor consiste en el índice del elemento y el valor del elemento en sí.

let arrayentries = ['a', 'b', 'c'];
console.log('5. ')
for (let [index, element] of arrayentries.entries()) {
    console.log(`Index: ${index}, Element: ${element}`);
}

/*Funcion every(): Es un método de los objetos Array que se utiliza para determinar si todos los elementos en el array cumplen con una determinada condición. 
Recibe una función de devolución de llamada como argumento, y esta función es aplicada a cada elemento del array. Si todas las llamadas a la función de devolución de llamada devuelven un valor true, entonces every() devuelve true. 
Si alguna llamada devuelve false, every() devuelve false.*/

let arrayevery = [1, 2, 3, 4, 5];
let resultevery = arrayevery.every(element => element % 2 === 0);
console.log(`6. Retorna lo siguiente: ${resultevery}`); // Output: false

/* Funcion fill(): Se utiliza para rellenar todos los elementos de un arreglo con un valor específico. 
Toma dos argumentos: el primer argumento es el valor con el que se rellenará el arreglo, y el segundo argumento es opcional y especifica el índice desde el cual se comenzará a rellenar el arreglo. 
Si no se especifica el índice de inicio, se rellenará desde el índice 0. */

//Se rellenó el arreglo arr con el valor 0 desde el índice 2.

let arrfill = [1, 2, 3, 4, 5];
arrfill.fill(0, 2, 4);
console.log(`7. Retorna lo siguiente: ${arrfill}`); // Output: [1, 2, 0, 0, 5]

/*Funcion filter(): Se utiliza para filtrar elementos de un arreglo y devolver un nuevo arreglo con los elementos que cumplen cierta condición. 
Toma como argumento una función de devolución de llamada (callback), la cual se ejecuta para cada elemento del arreglo y recibe tres argumentos: 
el valor actual del elemento, el índice del elemento y el arreglo completo. Si la función de devolución de llamada devuelve true para un elemento 
determinado, dicho elemento se incluirá en el nuevo arreglo de resultados, de lo contrario se excluirá.*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(`8.1. Retorno con números: ${evenNumbers}`); // Output: [2, 4, 6, 8, 10]


let words = ['apple', 'banana', 'mango', 'orange', 'pineapple'];
let longWords = words.filter(function(word) {
    return word.length > 5;
});
console.log(`8.2. Retorno con strings: ${longWords}`); // Output: ['banana, orange, pineapple']

/* Funcion .find(): Es utilizada para buscar un elemento específico en un array (matriz) y devuelve el primer elemento que cumple con 
la condición proporcionada en la función de callback. Si no encuentra ningún elemento que cumpla con la condición, devuelve undefined. 
array.find(function(currentValue, index, arr), thisValue)
Donde:
- CurrentValue es el elemento actual del array que está siendo procesado
- Index es el índice del elemento actual en el array
- Arr es el array que está siendo procesado
- ThisValue (opcional) es el valor para usar como this al ejecutar la función de callback.*/

let numbersfind = [4, 9, 16, 25];
let first = numbersfind.find(function(element) {
    return element > 18;
});
console.log(`9. Retorna lo siguiente: ${first}`);  // output: 25

/* Funcion .findIndex(): Es similar a la función find(), pero en lugar de devolver el primer elemento que cumple con la condición 
proporcionada en la función de callback, devuelve el índice del primer elemento que cumple con la condición.*/

let numbersIndex = [4, 9, 16, 25];
let firstIndex = numbersIndex.findIndex(function(element) {
    return element > 18;
});
console.log(`10. Retorna lo siguiente: ${firstIndex}`);  // output: 3

/* Funcion .findLast() o .findLastIndex(): No es una función nativa de JavaScript, no existe una función con ese nombre. 
Sin embargo, se puede lograr un comportamiento similar mediante una combinación de findIndex() y Array.prototype.slice() 
(para obtener una submatriz inverso) o también se puede iterar el array desde el final hacia el inicio (usando un for loop) 
y detener la iteración una vez se encuentra el valor deseado.*/

/* Funcion .flat(): Es utilizada para aplanar un array multidimensional en un array de una dimensión. 
Esto significa que toma un array con elementos que pueden ser también arrays y los convierte en un solo array con todos los elementos en un nivel. 
La sintaxis es la siguiente:
array.flat([depth])
Donde:
- depth (opcional) es el número de niveles de anidamiento para aplanar. Si no se especifica, el valor predeterminado es 1.*/

let numbersflat = [1, [2, [3, 4, [5]]]];
let flat = numbersflat.flat(2);
console.log('11.----------------------------');
console.log(flat);  // output: [1, 2, 3, 4, [5]]

/* Funcion .flatMap(): Es una operación de programación funcional que aplana una matriz producida por el mapeo de cada elemento de una matriz a una matriz secundaria, 
y luego concatena los resultados en una sola matriz.*/

const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flattenedArray = arrays.flatMap(x => x);
console.log('12.---------------------------- ');
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* Funcion .forEach(): Es un método de los arreglos que permite iterar sobre cada elemento
del arreglo y ejecutar una función dada en cada uno de ellos. 
array.forEach(function(element, index, array) {
    // código a ejecutar en cada elemento
});
Donde:
- Element es el elemento actual en el arreglo que está siendo procesado.
- Index es el índice del elemento actual en el arreglo.
- Array es el arreglo en sí.
*/

const numberseach = [1, 2, 3, 4, 5];
console.log('13.---------------------------- ');
numberseach.forEach(function(element) {
    console.log(element);
});

/* Funcion includes(): Es un método de los arreglos que se utiliza para 
determinar si un arreglo contiene un valor específico.

array.includes(valueToFind[, fromIndex])

Donde:
- valueToFind es el valor que se desea buscar en el arreglo.
- fromIndex (opcional) es el índice desde el cual se comenzará la búsqueda en el arreglo.
*/

const numbersinclude = [1, 2, 3, 4, 5];

console.log('14.---------------------------- ');
console.log(numbersinclude.includes(3)); // true
console.log(numbersinclude.includes(6)); // false

/*  Funcion indexOf(): Es un método de los arreglos que se utiliza para 
encontrar la posición de un valor específico en un arreglo. 

array.indexOf(valueToFind[, fromIndex])

Donde:
- valueToFind es el valor que se desea buscar en el arreglo.
- fromIndex (opcional) es el índice desde el cual se 
comenzará la búsqueda en el arreglo.

La función devuelve el índice del primer elemento que 
coincide con el valor buscado. Si el valor no se encuentra en el arreglo, devuelve -1.
*/

const numbersIndexof = [1, 2, 3, 4, 5];
console.log('15.---------------------------- ');
console.log(numbersIndexof.indexOf(3)); // 2
console.log(numbersIndexof.indexOf(6)); // -1

/* Funcion join(): Es un método de los arreglos que se utiliza para 
unir todos los elementos de un arreglo en una cadena de texto. 
*/

const numbersjoin = [1, 2, 3, 4, 5];
console.log('16.---------------------------- ');
console.log(numbersjoin.join()); // "1,2,3,4,5"
console.log(numbersjoin.join("-")); // "1-2-3-4-5"

/* Funcion keys(): Es un método de los objetos que se utiliza para 
obtener un objeto Iterable que contiene las claves de un objeto.
*/

const person = {
    name: "John",
    age: 30,
    location: "New York"
};
console.log(`17. Las claves del objeto person son: ${Object.keys(person)}`); // [ "name", "age", "location" ]

/* lastIndexOf(): Es un método de los arreglos que se utiliza para 
encontrar la última aparición de un elemento en un arreglo. 
*/

const numberslast = [1, 2, 3, 4, 5, 3, 2];
console.log('18.---------------------------- ');
console.log(numberslast.lastIndexOf(3)); // 5
console.log(numberslast.lastIndexOf(3, 4)); // 2
console.log(numberslast.lastIndexOf(6)); // -1

/* map(): Es un método de los arreglos que se utiliza para 
transformar cada elemento de un arreglo en otro elemento mediante una función.
*/
const numbersmap = [1, 2, 3, 4, 5];
const doubledNumbers = numbersmap.map(number => number * 2);
console.log('19.---------------------------- ');
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

/* pop(): Es un método de los arreglos que se utiliza para 
eliminar el último elemento de un arreglo y devolverlo. 
*/

const fruits = ['apple', 'banana', 'cherry'];
const lastFruit = fruits.pop();
console.log('20.---------------------------- ');
console.log(fruits); // ['apple', 'banana']
console.log(lastFruit); // 'cherry'

/* push(): Es un método de los arreglos que se utiliza para 
agregar uno o más elementos al final de un arreglo.
*/

const fruitspush = ['apple', 'banana'];
fruitspush.push('cherry', 'date');
console.log('20.---------------------------- ');
console.log(fruitspush); // ['apple', 'banana', 'cherry', 'date']

/* reduce(): Es un método de los arreglos que se utiliza para 
reducir un arreglo a un único valor mediante la aplicación de una función acumuladora 
y devolver el resultado acumulado. 
*/
const numbersreduce = [1, 2, 3, 4];
const sum = numbersreduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`21. La suma es: ${sum}`); // 10

/* reduceRight(): Es un método de los arreglos que funciona 
de manera similar al método reduce(), pero en lugar de procesar el arreglo 
de izquierda a derecha, procesa el arreglo de derecha a izquierda. 
*/

const wordsreduce = ['the', 'quick', 'brown', 'fox'];
const sentence = wordsreduce.reduceRight((accumulator, currentValue) => currentValue + ' ' + accumulator, '');
console.log(`22. La concatenacion queda asi: ${sentence}`); // 'fox brown quick the'

/* reverse(): Es un método de los arreglos que invierte el orden de los 
elementos en el arreglo. 
*/

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = originalArray.slice().reverse();
console.log('23.---------------------------- ');
console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(reversedArray); // [5, 4, 3, 2, 1]

/* shift(): Es un método de los arreglos que elimina el primer elemento 
del arreglo y devuelve dicho elemento. 
*/

const arrayshift = [1, 2, 3, 4, 5];
const firstElement = arrayshift.shift();
console.log('24.---------------------------- ');
console.log(firstElement); // 1
console.log(arrayshift); // [2, 3, 4, 5]

/* slice(): Es un método de los arreglos que devuelve una copia de 
una porción de un arreglo.
*/

const arrayslice = [1, 2, 3, 4, 5];
const slice = arrayslice.slice(1, 3);
console.log('25.---------------------------- ');
console.log(slice); // [2, 3]
console.log(arrayslice); // [1, 2, 3, 4, 5]

/* some(): Es un método de los arreglos que devuelve true si al menos un elemento 
del arreglo cumple con una determinada condición. 
*/

const arraysome = [1, 2, 3, 4, 5];
const resultsome = arraysome.some(element => element > 4);
console.log(`26. Devuelve: ${resultsome}`); // true

/* sort(): Es un método de los arreglos que ordena los elementos 
de un arreglo en un orden específico. 
*/

const arraysort = [3, 1, 4, 2, 5];
arraysort.sort();
console.log('27.---------------------------- ');
console.log(arraysort); // [1, 2, 3, 4, 5]

/* splice(): Es un método de los arreglos que se utiliza para agregar, 
eliminar o reemplazar elementos en un arreglo.
*/

const arraysplice = [1, 2, 3, 4, 5];
arraysplice.splice(2, 0, 6, 7);
console.log('28.---------------------------- ');
console.log(arraysplice); // [1, 2, 6, 7, 3, 4, 5]

/* toLocaleString(): Es un método que se utiliza para 
convertir un objeto numérico o una fecha en una cadena 
de texto en el formato especificado por la configuración regional.
*/

const date = new Date();
console.log(`29. La fecha es: ${date.toLocaleString()}`); // "2/2/2023, 2:25:43 PM"

/* toString(): Es un método que se utiliza para convertir un objeto en una cadena de texto.
*/

const numberstring = 12345.6789;
console.log(`30. El string queda asi: ${numberstring.toString()}`); // "12345.6789"

/* unshift(): Es un método que se utiliza para agregar uno o más elementos al comienzo de un arreglo. 
*/

const arrayunshift = [1, 2, 3, 4];
arrayunshift.unshift(0);
console.log('31.---------------------------- ');
console.log(arrayunshift); // [0, 1, 2, 3, 4]

/* values(): Es un método que se utiliza para 
obtener un objeto iterador que contiene los valores de un objeto.
*/

const fruitsvalues = {apple: 'red', banana: 'yellow', cherry: 'red'};
const values = Object.values(fruitsvalues);
console.log('32.---------------------------- ');
console.log(values);
// Output: ["red", "yellow", "red"]















