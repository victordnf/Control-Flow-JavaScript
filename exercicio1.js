const prompt = require('prompt-sync')();

const numero1Sprint = prompt('Digite um número inteiro: ')
const numero2Sprint = prompt('digite outro número inteiro: ')
const numero3Sprint = prompt('digite mais um número inteiro: ')

const numero1 = Number(numero1Sprint)
const numero2 = Number(numero2Sprint)
const numero3 = Number(numero3Sprint)

if(numero1 > numero2 && numero1 > numero3){
    console.log(`O maior número é o: ${numero1}`)
}
else if(numero2 > numero1 && numero2 > numero3){
    console.log(`O maior número é o: ${numero2}`)
}
else if(numero3 > numero2 && numero3 > numero1){
    console.log(`O maior número é o: ${numero3}`)
}
else{
    console.log(`Os número são iguais ou inválidos.`)
}