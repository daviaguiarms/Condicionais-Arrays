console.log('Trabalhando com condicionais:')


let array = new Array('Salvador', 'Sao Paulo', ' Rio De Janeiro', 'Curitiba')
array.push('BH') //Adicionando itens na lista (array)
console.log("Destinos Possiveis:")
console.log(array)



const idadeComprador =20;
const estaAcompanhada = true;
const temPassagemComprada = true;

if (idadeComprador >= 18 || estaAcompanhada) {
   console.log("Passagem comprada com sucesso");
   array.splice(1, 1) // remover item do array
} else {
   console.log("Comprador menor de idade e nao posso vender");
}

console.log('Embarque: ');
if(idadeComprador >= 18 && temPassagemComprada){
   console.log("Boa viagem!");
} else {
   console.log('Voce nao pode embarcar');
}





console.log(array)

