const prompt = require('prompt-sync')();

const num1Sprint = prompt('Digite um número inteiro: ');
const num2Sprint = prompt('Digite mais um número inteiro: ');
const num3Sprint = prompt('Digite mais um número inteiro: ');

const num1 = Number(num1Sprint);
const num2 = Number(num2Sprint);
const num3 = Number(num3Sprint);

if(num1<num2 && num2<num3){
    console.log(`A sequência crescente dos número digitados é : ${num1}, ${num2} e ${num3}`);
}
else if(num1<num3 && num3<num1){
    console.log(`A sequência crescente dos número digitados é : ${num1}, ${num3} e ${num2}`);
}
else if(num2<num1 && num1<num3){
    console.log(`A sequência crescente dos número digitados é : ${num2}, ${num1} e ${num3}`);
}
else if(num2<num3 && num3<num1){
    console.log(`A sequência crescente dos número digitados é : ${num2}, ${num3} e ${num1}`);
}
else if(num3<num1 && num1<num2){
    console.log(`A sequência crescente dos número digitados é : ${num3}, ${num1} e ${num2}`);
}
else{
    console.log(`A sequência crescente dos número digitados é : ${num3}, ${num2} e ${num1}`);
}