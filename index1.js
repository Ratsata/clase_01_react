function pruebaFindIndex(arr, caracterBuscado){
    const result = arr.findIndex(x => x === caracterBuscado)
    console.log(`findIndex: ${result != -1}`);
}

function pruebaEvery(arr, valor){
    const todosMayorAX = currentValue => currentValue > valor;
    const result = arr.every(todosMayorAX)
    console.log(`every: ${result}`);
}

function pruebaSome(arr, valor){
    const algunosMayorAX = currentValue => currentValue > valor;
    const result = arr.some(algunosMayorAX)
    console.log(`some: ${result}`);
}

function pruebaFilter(arr, largo){
    const result = arr.filter(value => value % 2 == 0);
    console.log(`filter: ${result}`);
}

function pruebaMap(arr, numero){
    const result = arr.map(x => x * numero);
    console.log(`map: ${result}`);
}

let numero = 2
const arr = [1, 2, 30, 39, 29, 10, 13];
console.log(`Datos: ${arr} | Número: ${numero}`)
console.log('------------------------------------')

console.log(`¿Existe el número ${numero} en el arreglo?`)
pruebaFindIndex(arr, numero)

console.log('------------------------------------')

console.log(`¿Todos los valores del arreglo son mayores que ${numero}?`)
pruebaEvery(arr, numero)

console.log('------------------------------------')

console.log(`¿Alguno de los los valores del arreglo son mayores que ${numero}?`)
pruebaSome(arr, numero)

console.log('------------------------------------')

console.log('Obtener todos los valores pares del arreglo')
pruebaFilter(arr)

console.log('------------------------------------')

console.log(`Todos los valores multiplicados por ${numero}`)
pruebaMap(arr, numero)