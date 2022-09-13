const prompt = require('prompt-sync')();

const num1Sprint = prompt('Digite um número inteiro: ');
const num1 = Number(num1Sprint);

if(num1 % 2==0){
   
    const sqrtNum1 = Math.sqrt(num1);

    console.log(`O número digitado é par e a raíz quadrada desse número é: ${Math.round(sqrtNum1)} `);
}
else{

    const powNum1 = Math.pow(num1,2);

    console.log(`O número digitado é ímpar e esse número elevado ao quadrado é: ${powNum1}`);
}
