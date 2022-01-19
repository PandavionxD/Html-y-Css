// crea 3 arrays que tendra numeros del 1 al 9. El primier array se llamara pares y el segundo impares, ambos estaran vacios, despues multiplica cada uno de los numeros de array con numeros por un numero aleatorio del 1 al 100, si el resultado es par guarda ese numero en el array de pares y si es impar guarda en el array de impares muestra por consola la multiplicacion que se produce junto con su resultado con el formato 2*3+6 y el array de pares e impares.
let numeros= [1,2,3,4,5,6,7,8,9]
let par = []
let impar =[]
let random = Number(prompt('Escribe un numero al azar del 1 al 100: '))
if ( random>0 && random<=100) {
    for (let numero of numeros) {
        let num=numero*random
        if (numero%2==0) {
            par.push(num)
        }else{
            impar.push(num)
        }
    }
}else{
    console.log('No pusiste un numero entre el rango pedido.')
}
console.log(`El primer array par es de ${par}
El segundo array impar es ${impar}`)