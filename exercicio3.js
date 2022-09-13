const prompt = require('prompt-sync')();

const idade = prompt('Digite sua idade para saber sua classificação: ')

if(idade<=9){
    console.log('Você não possui a idade mínima, volte quando fizer 10!')
}
else if(idade<=14){
    console.log('Você foi classificado para a categoria "infantil".')
}
else if(idade<=17){
    console.log('Você foi classificado para a categoria "juvenil".')
}
else if(idade<=25){
    console.log('Você foi classificado para categoria "adulto".')
}
else{
    console.log('Você ultrapassou a idade limite, lamentamos!')
}