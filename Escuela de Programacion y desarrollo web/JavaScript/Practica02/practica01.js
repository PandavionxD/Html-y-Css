// Un restaurante ofece un descuento del 10% para consumo de hasta 100.00 soles y un descuento del 20% para consumos mayores, para ambos casos se aplica un impuesto del 19%. Determinar el monto del descuento , el impuesto y el monto a Pagar.

let consumo = Number(prompt('Escribe aqui el consumo: '))
let descuento =0
let des1 = 0
let impuesto=0 
let total=0

if (consumo <=100) {
    descuento ='10%'
    des1 = consumo*0.10
}else{
    descuento = '20%'
    des = consumo*0.20
}
impuesto = consumo*0.19
total = consumo + impuesto -des1
document.write(
`
<pre>
El consumo es:       ${consumo}
El descuento es:     ${descuento}
El impuesto es:      ${impuesto}%
El total es:         ${total}
</pre>
`
)
console.log(typeof consumo)
console.log(typeof impuesto)
